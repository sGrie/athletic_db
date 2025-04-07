from flask import Flask, jsonify
import json

from news import get_news

app = Flask(__name__)

@app.route("/")
def root():
    return jsonify(
        status=200,
        message="Backend works."
    )

@app.route("/athletes")
def athletes():
    athletes = []

    with open('temp-data.json') as json_data:
        data = json.load(json_data)
        for athlete in data['athletes']:
            athletes.append(athlete)

    return jsonify(
        athletes=athletes
    )

@app.route("/news")
def news():
    articles = get_news()

    return jsonify(
        articles=articles
    )
