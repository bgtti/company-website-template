"""
config.py is the configuration file used in run.py, the entry point of the app.
"""
import os
from dotenv import load_dotenv

load_dotenv()

EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS", "")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD", "")
EMAIL_DEFAULT_SENDER = os.getenv("EMAIL_ADDRESS", "")

SECRET_KEY = os.getenv("SECRET_KEY", "longSecretKey")

APP_NAME = "COMPANY WEBSITE TEMPLATE" #TODO: change to your app name

RESERVED_DOMAINS = ["yourAppName.com"] # TODO: add your own reserved URLs here, to prevent abuse of the contact form (add your own domain, to prevent email header abuse)

class BaseConfig:
    # BASE_URL = BASE_URLS["backend"]
    SECRET_KEY = SECRET_KEY
    
    # Flask-Mail Config
    MAIL_SERVER = "smtp.gmail.com" # consider using mailtrap for testing - not implemented.
    MAIL_PORT = 465
    MAIL_USERNAME = EMAIL_ADDRESS
    MAIL_PASSWORD = EMAIL_PASSWORD
    MAIL_DEFAULT_SENDER = EMAIL_DEFAULT_SENDER 
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True

    # Cookie settings (tighten for HTTPS)
    SESSION_COOKIE_SECURE = False
    SESSION_COOKIE_SAMESITE = "Lax"

class DevelopmentConfig(BaseConfig):
    DEBUG = True
    TEMPLATES_AUTO_RELOAD = True

class ProductionConfig(BaseConfig):
    DEBUG = False

    # Cookie settings
    SESSION_COOKIE_HTTPONLY = True
    REMEMBER_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_SAMESITE = "None" 