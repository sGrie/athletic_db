# backend/config.py

import os

class Config:
    # Replace 'username' and 'password' with your PostgreSQL credentials
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://miaen:miaen123@localhost:5432/athletic_db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
