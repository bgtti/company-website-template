"""
Flask extensions and Create App function.

Make sure you have a .env file with the correct email credentials to be able to use the email sending feature.
"""

from flask import Flask
import os
from dotenv import load_dotenv

#Extensions
from flask_mail import Mail
from flask_cors import CORS

# TODO: add rate limiting to prevent abuse of the contact form, e.g. with Flask-Limiter

mail = Mail()
"""`mail` is an instance of `Flask-Mail`, used to send emails through the Flask application."""

cors = CORS()
"""`cors` refers to the extension `Flask-CORS`, which handles Cross-Origin Resource Sharing (CORS) to allow or restrict resource sharing between different domains."""

load_dotenv()

CORS_ORIGINS = os.getenv("CORS_ORIGINS", ["http://localhost:5173", "http://127.0.0.1:5173"])

#Create app

def create_app(config_class):

    # Create application
    app = Flask(__name__)

    # CONFIG Configuration 
    app.config.from_object(config_class)

    # Initialization of app extensions
    mail.init_app(app) # Initialize flask mail
    cors.init_app(app, supports_credentials=True, resources={r"/api/*": {"origins": CORS_ORIGINS}}) 

    # Blueprints
    from .routes import main
    app.register_blueprint(main)

    @app.route('/test')
    def test_page():
        return '<h1> Testing the App </h1>'

    return app