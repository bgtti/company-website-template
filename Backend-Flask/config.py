"""
config.py is the configuration file used in run.py, the entry point of the app.
"""
import os
from dotenv import load_dotenv
import logging
from flask import request, jsonify

APP_NAME = "COMPANY WEBSITE TEMPLATE" #TODO: change to your app name

RESERVED_DOMAINS = ["yourAppName.com"] # TODO: add your own reserved URLs here, to prevent abuse of the contact form (add your own domain, to prevent email header abuse)

load_dotenv()

EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS", "")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD", "")
EMAIL_DEFAULT_SENDER = os.getenv("EMAIL_ADDRESS", "")

SECRET_KEY = os.getenv("SECRET_KEY", "longSecretKey")

ENV_RATELIMIT_STORAGE_URI = os.getenv("RATELIMIT_STORAGE_URI", "memory://")


# Defining logging config
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s"
)

# Defining Rate Limiter function
def rate_limit_exceeded(rate_limit):
    """
    Function used to configure flask-limiter.
    Defines what happens when client exceed call limits: 429 error.
    See the Flask-Limiter documentation for more information.
    """
    client_ip = request.remote_addr
    logging.warning(f"Rate limit exceeded for client IP: {client_ip}")
    return jsonify({
        "response": False,
        "message": "Too many requests. Please try again later."
    }), 429

class BaseConfig:
    # BASE_URL = BASE_URLS["backend"]
    SECRET_KEY = SECRET_KEY
    
    # Flask-Mail Config
    MAIL_SERVER = "smtp.gmail.com" # consider using mailtrap for testing.
    MAIL_PORT = 465
    MAIL_USERNAME = EMAIL_ADDRESS
    MAIL_PASSWORD = EMAIL_PASSWORD
    MAIL_DEFAULT_SENDER = EMAIL_DEFAULT_SENDER 
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True

    # Cors
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SECURE = False
    SESSION_COOKIE_SAMESITE = "Lax"

    # Flask-Limiter Config
    RATELIMIT_DEFAULT = "20/day;5/hour"

    RATELIMIT_HEADERS_ENABLED = True
    RATELIMIT_STRATEGY = "fixed-window"
    RATELIMIT_ON_BREACH_CALLBACK = rate_limit_exceeded

class DevelopmentConfig(BaseConfig):
    DEBUG = True
    TEMPLATES_AUTO_RELOAD = True

    # Flask-Limiter Config
    # RATELIMIT_STORAGE_URI = "redis://localhost:6379/1" 
    RATELIMIT_STORAGE_URI = "memory://"
    RATELIMIT_ENABLED = False # Rate limiter disabled

class ProductionConfig(BaseConfig):
    DEBUG = False

    # Cors
    SESSION_COOKIE_SECURE = True

    # Flask rate limiter
    RATELIMIT_ENABLED = True
    RATELIMIT_STORAGE_URI = ENV_RATELIMIT_STORAGE_URI