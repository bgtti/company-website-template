from functools import wraps
from flask import jsonify, request
import logging
import jsonschema

def validate_schema(schema_name):
    """
    validate_schema(schema_name: JsonType) -> None
    ---------------------------------------------------------------
    Route decorator used to validate payloads against a json schema.
    Returns error 400 if request payload incorrect.
    ---------------------------------------------------------------
    Example usage:
    @blueprint_name.route("/some_route", methods=["POST"])
    @validate_schema(some_schema)
    def route_name():
    # ...
    """
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kw):
            if json_data is None:
                logging.warning("Invalid or missing JSON. Client IP: %s", request.remote_addr)
                return jsonify({"response": False,"message": "Request should be valid JSON."}), 400
            try:
                json_data = request.get_json()
                jsonschema.validate(instance=json_data, schema=schema_name)
            except jsonschema.exceptions.ValidationError as e:
                logging.info(f"JSON schema validation error. Client ip: {request.remote_addr}. Error: {e}")
                return jsonify({"response": False, "message": "Request should be valid JSON."}), 400
            except Exception as e:
                logging.info(f"JSON schema exception. Client ip: {request.remote_addr}. Error: {e}")
                return jsonify({"response": False, "message": "Invalid JSON data."}), 400
            return f(*args, **kw)
        return wrapper
    return decorator