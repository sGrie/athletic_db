import os
from dotenv import load_dotenv
from flask import Flask, jsonify, request
import psycopg2

from news import get_news
from setup import setup

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

@app.route("/", methods=["GET"])
def root():
    return jsonify(
        status=200,
        message="Backend works."
    )

# /athlete
@app.route("/athletes", methods=["GET"])
def get_athletes():
    return jsonify()

# /athlete?id=0
@app.route("/athlete", methods=["GET"])
def get_athlete():
    athleteId = request.args.get('id')

    return jsonify()

# /competition
@app.route("/competitions", methods=["GET"])
def get_competitions():
    return jsonify()

# /competition?id=0
@app.route("/competition", methods=["GET"])
def get_competition():
    competitionId = request.args.get('id')

    return jsonify()

# /school
@app.route("/schools", methods=["GET"])
def get_schools():
    return jsonify()

# /school?id=0
@app.route("/school", methods=["GET"])
def get_school():
    schoolId = request.args.get('id')

    return jsonify()

# /team
@app.route("/teams", methods=["GET"])
def get_teams():
    return jsonify()

# /team?id=0
@app.route("/team", methods=["GET"])
def get_team():
    teamId = request.args.get('id')

    return jsonify()

# /result?event=0
@app.route("/results", methods=["GET"])
def get_results():
    event = request.args.get('event')

    return jsonify()

@app.route("/news", methods=["GET"])
def news():
    limit = int(request.args.get('limit'))

    articles = get_news()

    return jsonify(
        articles=articles[slice(limit)]
    )
