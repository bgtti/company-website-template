"""
**run.py is the entry point to the application**: the application script where the instance is defined.
"""
from config import DevelopmentConfig
from app import create_app

app = create_app(DevelopmentConfig)

if __name__ == "__main__":
    
    print("App running in HTTP: Dev environment")
    
    app.run(port=5000) 