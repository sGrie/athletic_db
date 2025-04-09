import os
from dotenv import load_dotenv
from flask import Flask, jsonify, request
import psycopg2

from news import get_news

load_dotenv()

app = Flask(__name__)

DB_NAME = os.getenv('DB_NAME')
DB_USERNAME = os.getenv('DB_USERNAME')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')

conn = psycopg2.connect(
    dbname=DB_NAME,
    user=DB_USERNAME,
    password=DB_PASSWORD,
    host=DB_HOST,
    port="5432"
)
cursor = conn.cursor()

@app.route("/")
def hello_world():
    return jsonify(
        status=200,
        message="Backend works."
    )

@app.route("/news")
def news():
    limit = int(request.args.get('limit'))

    articles = get_news()

    return jsonify(
        articles=articles[slice(limit)]
    )
