"""
__init__.py contains Flask extensions and Create App function.

Make sure you have a .env file with the correct email credentials to be able to use the email sending feature.
"""
from flask import Flask
import ast
import os
from dotenv import load_dotenv

#Extensions
from flask_mail import Mail
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_cors import CORS

# TODO: add rate limiting to prevent abuse of the contact form, e.g. with Flask-Limiter
# CORS_ORIGINS = os.getenv("CORS_ORIGINS",["http://localhost:5173","http://127.0.0.1:5173"])
mail = Mail()
"""`mail` is an instance of `Flask-Mail`, used to send emails through the Flask application."""

limiter = Limiter(key_func=get_remote_address)
"""`limiter` refers to the extension `Flask-Limiter`, which is used to apply rate-limiting to Flask routes. 
It uses `get_remote_address` to determine the source of requests."""

cors = CORS()
"""`cors` refers to the extension `Flask-CORS`, which handles Cross-Origin Resource Sharing (CORS) to allow or restrict resource sharing between different domains."""

load_dotenv()

cors_urls = os.getenv("CORS_ORIGINS",["http://localhost:5173","http://127.0.0.1:5173"])
CORS_ORIGINS = ast.literal_eval(cors_urls)



#Create app

def create_app(config_class):

    # Create application
    app = Flask(__name__)

    # CONFIG Configuration 
    app.config.from_object(config_class)

    # Initialization of app extensions
    mail.init_app(app) # Initialize flask mail
    limiter.init_app(app) # Initialize Flask limiter
    cors.init_app(
    app,
    resources={
        r"/api/*": {
            "origins": CORS_ORIGINS,
            "methods": ["POST", "OPTIONS"],
            "allow_headers": ["Content-Type"],
        }
    },
)

    # Blueprints
    from .routes import main
    app.register_blueprint(main)

    @app.route('/test')
    def test_page():
        return '<h1> Testing the App </h1>'

    return app