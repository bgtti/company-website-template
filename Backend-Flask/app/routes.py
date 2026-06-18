"""
routes.py contains the only route this project uses.
"""
from html import escape
from flask import Blueprint, request, jsonify
from flask_mail import Message as EmailMessage

from config import EMAIL_ADDRESS, EMAIL_PASSWORD, EMAIL_DEFAULT_SENDER, APP_NAME, RESERVED_DOMAINS
from app import mail #instance of Flask-Mail initialized in __init__.py

# Json Schema
from app.custom_decorator import validate_schema
from app.schemas import contact_form_schema

main = Blueprint("main", __name__)


@main.post("/api/contact")
# @limiter.limit("10/day")
@validate_schema(contact_form_schema)
def contact():
    """
    Receives the contact form submission from the frontend, validates the input, and sends an email using the provided details. It also includes a honeypot field to silently reject bot submissions.
    Expected JSON payload:
    {
        "name": "Sender's name",
        "email": "Sender's email address",
        "subject": "Subject of the message",
        "message": "Content of the message",
        "occupation": "" // Honeypot field, should be empty for valid submissions
    }
    Possible responses: 200, 400, 429 (if rate limited), 500.
    """
    json_data = request.get_json()
    name = escape(json_data["name"])
    email = escape(json_data["email"])
    subject = escape(json_data["subject"])
    message = escape(json_data["message"])
    occupation = json_data.get("occupation", None) # Honeypot field

    # Honeypot: silently reject bots
    if occupation:
        return jsonify({"response": True, "message": "Message sent successfully."}), 200
    
    # Email validation: prevent email header abuse
    email_domain = email.lower().split("@")[-1].strip()

    if email_domain in [domain.lower().strip() for domain in RESERVED_DOMAINS]:
        return jsonify({"response": False, "message": "Invalid email address."}), 400

    # Email sending
    if not EMAIL_ADDRESS or not EMAIL_PASSWORD:
        print("Email credentials not provided. Unable to send email.")
        return jsonify({"response": False, "message": "Message could not be sent."}), 500
    
    email_body = f"""
    <b>{APP_NAME} New Contact Form Message received.</b><br>
    ********************************************************************<br>
    <b>Sender name:</b> {name}<br>
    <b>Sender email:</b> {email}<br>
    ********************************************************************<br>
    <b>Subject:</b> {subject}<br>
    <br>
    <b>Message received:</b><br>
    <br>
    {message}

    """

    new_email = EmailMessage(
        f"{APP_NAME} New message from {name}: {subject}",
        sender = EMAIL_DEFAULT_SENDER,
        recipients = [EMAIL_ADDRESS]
    )
    new_email.html = email_body

    try:
        mail.send(new_email)
        return jsonify({"response": True, "message": "Message sent successfully."}), 200
    except Exception as e:
        print("Email error:", e)
        return jsonify({"response": False, "message": "Message could not be sent."}), 500