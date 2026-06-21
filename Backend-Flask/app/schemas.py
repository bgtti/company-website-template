"""`schemas.py` contains the JSON schema for validating the contact form submission received from the frontend. It defines the expected structure of the JSON data, including the types, required fields, and constraints on input lengths and formats."""

INPUT_LENGTH = {
    "name": {
        "minValue": 1,
        "maxValue": 200
    },
    "email": {
        "minValue": 6,
        "maxValue": 320
    },
    "occupation":{ # Honeypot field
        "minValue": 0,
        "maxValue": 200
    },
    "subject":{
        "minValue": 1,
        "maxValue": 100
    },
    "message":{
        "minValue": 1,
        "maxValue": 500
    }
}
"""`INPUT_LENGTH` is a dictionary containing the minimum and maximum input length for a number of variables that can be received in json.
"""

NAME_PATTERN = r'^[A-Za-zÀ-ÖØ-öø-ÿ .\'-]+$'
"""`NAME_PATTERN` is a regex to define the name of a user."""
# Explanation of the NAME_PATTERN:
# ^ asserts the start of the string.
# [A-Za-zÀ-ÖØ-öø-ÿ .\'-] defines a character class that allows letters, spaces, accented characters, dots, apostrophes, and hyphens.
# + means one or more of the preceding characters.
# $ asserts the end of the string.
# ALTERNATIVELY use: NAME_PATTERN = r"^[A-Za-zÀ-ÖØ-öø-ÿĀ-ž .'-]+$"
# The above would cover most european alphabets, inlcuding hungarian

EMAIL_PATTERN = r'^[^@\s]+@[^@\s]+$'
"""`EMAIL_PATTERN` is a regex to define the email format of a user."""
# Explanation of the EMAIL_PATTERN:
# ^: Asserts the start of the string.
# [^@\s]+: Matches one or more characters that are not '@' or whitespace.
# @: Matches the '@' character.
# [^@\s]+: Matches one or more characters that are not '@' or whitespace.
# $: Asserts the end of the string.
# ALTERNATIVELY, IF THE ABOVE IS TOO PERMISSIVE:
# EMAIL_PATTERN = (
#     r"^(?!\.)"
#     r"(?!.*\.\.)"
#     r"[A-Za-z0-9._%+-]+"
#     r"@"
#     r"(?!-)"
#     r"[A-Za-z0-9.-]+"
#     r"\.[A-Za-z]{2,}$"
# )
# enforces local part: letters, numbers, . _ % + -, no leading dots, no consecutive dots
# domain part: letters, umbers, hyphen, dot, no leading hyphen, requires real TLD
# no spaces allowed, no <> " ' 

contact_form_schema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string", 
            "minLength": INPUT_LENGTH['name']['minValue'], 
            "maxLength": INPUT_LENGTH['name']['maxValue'],
            "pattern": NAME_PATTERN
            },
        "email": {
            "type": "string", 
            "minLength": INPUT_LENGTH['email']['minValue'], 
            "maxLength": INPUT_LENGTH['email']['maxValue'], 
            "pattern": EMAIL_PATTERN
            },
        "subject": {
            "type": "string", 
            "minLength":  INPUT_LENGTH['subject']['minValue'], 
            "maxLength": INPUT_LENGTH['subject']['maxValue'],
        },
        "message": {
            "type": "string", 
            "minLength":  INPUT_LENGTH['message']['minValue'], 
            "maxLength": INPUT_LENGTH['message']['maxValue'],
        },
        "occupation": { # Honeypot field
            "type": "string", 
            "minLength":  INPUT_LENGTH['occupation']['minValue'], 
            "maxLength": INPUT_LENGTH['occupation']['maxValue'], 
        },
    },
    "additionalProperties": False,
    "required": ["name","email", "subject", "message"]
}