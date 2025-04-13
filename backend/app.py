import os
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

from news import get_news
from models import db, School, Team, Athlete, Competition, Event, EventSubmission

app = Flask(__name__)
CORS(app)

load_dotenv()

DB_NAME = os.getenv('DB_NAME')
DB_USERNAME = os.getenv('DB_USERNAME')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')

app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# @app.route("/test-db")
# def test_db():
#     try:
#         # Create a school
#         school = School(school_name="Test School", mascot="Tigers")
#         db.session.add(school)
#         db.session.commit()

#         # Create a team
#         team = Team(name="Test Team", sport="Basketball", conference="Big East", head_coach="Coach Carter", school_id=school.id)
#         db.session.add(team)
#         db.session.commit()

#         # Create an athlete
#         athlete = Athlete(first_name="John", last_name="Doe", age=20, main_event="100m", teamID=team.teamID)
#         db.session.add(athlete)
#         db.session.commit()

#         # Create a competition
#         competition = Competition()
#         db.session.add(competition)
#         db.session.commit()

#         # Create an event
#         event = Event(name="100m Finals", id=competition.id)
#         db.session.add(event)
#         db.session.commit()

#         # Create a submission
#         submission = EventSubmission(id=athlete.id, id=event.id, result="10.2s")
#         db.session.add(submission)
#         db.session.commit()

#         # Query everything back
#         schools = [s.school_name for s in School.query.all()]
#         teams = [t.name for t in Team.query.all()]
#         athletes = [f"{a.first_name} {a.last_name}" for a in Athlete.query.all()]
#         competitions = [c.id for c in Competition.query.all()]
#         events = [e.name for e in Event.query.all()]
#         submissions = [f"{s.result}" for s in EventSubmission.query.all()]

#         return jsonify({
#             "schools": schools,
#             "teams": teams,
#             "athletes": athletes,
#             "competitions": competitions,
#             "events": events,
#             "submissions": submissions
#         })

#     except Exception as e:
#         return str(e), 500

# Routes for Schools
# @app.route('/schools', methods=['POST'])
# def create_school():
#     data = request.json
#     school = School(**data)
#     db.session.add(school)
#     db.session.commit()
#     return jsonify({'message': 'School created'}), 201
    
@app.route('/schools', methods=['GET'])
def get_schools():
    schools = School.query.all()

    return jsonify([{'id': s.id, 'name': s.name, 'mascot': s.mascot} for s in schools])

@app.route('/schools/<int:school_id>', methods=['GET'])
def get_school(school_id):
    school = School.query.get_or_404(school_id)

    return jsonify({'id': school.id, 'name': school.name, 'mascot': school.mascot})

@app.route('/schools/<int:school_id>/teams', methods=['GET'])
def get_teams_for_school(school_id):
    teams = Team.query.filter_by(school_id=school_id).all()

    return jsonify([{
        'id': t.id,
        'name': t.name,
        'sport': t.sport,
        'conference': t.conference,
        'head_coach': t.head_coach
    } for t in teams])

@app.route('/schools/<int:school_id>/athletes', methods=['GET'])
def get_athletes_for_school(school_id):
    teams = Team.query.filter_by(school_id=school_id).all()
    team_ids = [team.id for team in teams]
    athletes = Athlete.query.filter(Athlete.team_id.in_(team_ids)).all()

    return jsonify([{
        'id': a.id,
        'first_name': a.first_name,
        'last_name': a.last_name,
        'age': a.age,
        'main_event': a.main_event
    } for a in athletes])


# @app.route('/schools/<int:school_id>', methods=['PUT'])
# def update_school(school_id):
#     data = request.json
#     school = School.query.get_or_404(school_id)
#     school.name = data.get('name', school.name)
#     school.mascot = data.get('mascot', school.mascot)
#     db.session.commit()
#     return jsonify({'message': 'School updated'})

# @app.route('/schools/<int:school_id>', methods=['DELETE'])
# def delete_school(school_id):
#     school = School.query.get_or_404(school_id)
#     db.session.delete(school)
#     db.session.commit()
#     return jsonify({'message': 'School deleted'})

# Routes for Teams
# @app.route('/teams', methods=['POST'])
# def create_team():
#     data = request.json
#     team = Team(**data)
#     db.session.add(team)
#     db.session.commit()
#     return jsonify({'message': 'Team created'}), 201

@app.route('/teams', methods=['GET'])
def get_teams():
    teams = Team.query.all()
    schools = School.query.all()

    return jsonify([{
        'id': t.id,
        'name': t.name,
        'head_coach': t.head_coach,
        'conference': t.conference,
        'sport': t.sport,
        'school_id': t.school_id,

        'school': next(({
            'id': s.id,
            'name': s.name,
            'mascot': s.mascot
        } for s in schools if s.id == t.school_id), None)
    } for t in teams])

@app.route('/teams/<int:team_id>', methods=['GET'])
def get_team(team_id):
    team = Team.query.get_or_404(team_id)

    return jsonify({
        'id': team.id,
        'name': team.name,
        'sport': team.sport,
        'conference': team.conference,
        'head_coach': team.head_coach,
        'school_id': team.school_id
    })

@app.route('/teams/<int:team_id>/school', methods=['GET'])
def get_school_for_team(team_id):
    team = Team.query.get_or_404(team_id)
    school = School.query.get_or_404(team.school_id)

    return jsonify({
        'id': school.id,
        'name': school.name,
        'mascot': school.mascot
    })

@app.route('/teams/<int:team_id>/athletes', methods=['GET'])
def get_athletes_for_team(team_id):
    athletes = Athlete.query.filter_by(team_id=team_id).all()

    return jsonify([{
        'id': a.id,
        'first_name': a.first_name,
        'last_name': a.last_name,
        'age': a.age,
        'main_event': a.main_event
    } for a in athletes])


# @app.route('/teams/<int:team_id>', methods=['PUT'])
# def update_team(team_id):
#     data = request.json
#     team = Team.query.get_or_404(team_id)
#     team.name = data.get('name', team.name)
#     team.sport = data.get('sport', team.sport)
#     team.conference = data.get('conference', team.conference)
#     team.head_coach = data.get('head_coach', team.head_coach)
#     db.session.commit()
#     return jsonify({'message': 'Team updated'})

# @app.route('/teams/<int:team_id>', methods=['DELETE'])
# def delete_team(team_id):
#     team = Team.query.get_or_404(team_id)
#     db.session.delete(team)
#     db.session.commit()
#     return jsonify({'message': 'Team deleted'})

# # Routes for Athletes
# @app.route('/athletes', methods=['POST'])
# def create_athlete():
#     data = request.json
#     athlete = Athlete(**data)
#     db.session.add(athlete)
#     db.session.commit()
#     return jsonify({'message': 'Athlete created'}), 201

@app.route('/athletes', methods=['GET'])
def get_athletes():
    athletes = Athlete.query.all()
    schools = School.query.all()
    teams = Team.query.all()

    return jsonify([{
        'id': a.id,
        'first_name': a.first_name,
        'last_name': a.last_name,
        'country_code': a.country_code,
        'age': a.age,
        'main_event': a.main_event,
        'team_id': a.team_id,

        'team': next(({
            'id': t.id,
            'name': t.name,
            'sport': t.sport,
            'conference': t.conference,
            'head_coach': t.head_coach,
            'school_id': t.school_id,

            'school': next(({
                'id': s.id,
                'name': s.name,
                'mascot': s.mascot
            } for s in schools if s.id == t.school_id), None)
        } for t in teams if t.id == a.team_id), None)
    } for a in athletes])

@app.route('/athletes/<int:athlete_id>', methods=['GET'])
def get_athlete(athlete_id):
    athlete = Athlete.query.get_or_404(athlete_id)
    schools = School.query.all()
    teams = Team.query.all()

    return jsonify({
        'id': athlete.id,
        'first_name': athlete.first_name,
        'last_name': athlete.last_name,
        'country_code': athlete.country_code,
        'age': athlete.age,
        'main_event': athlete.main_event,
        'team_id': athlete.team_id,

        'team': next(({
            'id': t.id,
            'name': t.name,
            'sport': t.sport,
            'conference': t.conference,
            'head_coach': t.head_coach,
            'school_id': t.school_id,

            'school': next(({
                'id': s.id,
                'name': s.name,
                'mascot': s.mascot
            } for s in schools if s.id == t.school_id), None)
        } for t in teams if t.id == athlete.team_id), None)
    })

@app.route('/athletes/<int:athlete_id>/submissions', methods=['GET'])
def get_submissions_for_athlete(athlete_id):
    athlete = Athlete.query.get_or_404(athlete_id)
    submissions = EventSubmission.query.filter_by(athlete_id=athlete.id).all()
    events = Event.query.all()

    return jsonify([{
        'id': s.id,
        'result': s.result,
        'event_id': s.event_id,
        'athlete_id': s.athlete_id,

        'event': next(({
            'id': e.id,
            'name': e.name,
            'comp_id': e.comp_id
        } for e in events if e.id == s.event_id), None)
    } for s in submissions])

# @app.route('/athletes/<int:athlete_id>', methods=['PUT'])
# def update_athlete(athlete_id):
#     data = request.json
#     athlete = Athlete.query.get_or_404(athlete_id)
#     athlete.first_name = data.get('first_name', athlete.first_name)
#     athlete.last_name = data.get('last_name', athlete.last_name)
#     athlete.age = data.get('age', athlete.age)
#     athlete.main_event = data.get('main_event', athlete.main_event)
#     db.session.commit()
#     return jsonify({'message': 'Athlete updated'})

# @app.route('/athletes/<int:athlete_id>', methods=['DELETE'])
# def delete_athlete(athlete_id):
#     athlete = Athlete.query.get_or_404(athlete_id)
#     db.session.delete(athlete)
#     db.session.commit()
#     return jsonify({'message': 'Athlete deleted'})

# Routes for Competitions
# @app.route('/competitions', methods=['POST'])
# def create_competition():
#     comp = Competition()
#     db.session.add(comp)
#     db.session.commit()
#     return jsonify({'message': 'Competition created', 'id': comp.id}), 201

@app.route('/competitions', methods=['GET'])
def get_competitions():
    comps = Competition.query.all()
    events = Event.query.all()

    return jsonify([{
        'id': c.id,
        'event_location': c.event_location,
        'name': c.name,
        'date': c.date,
        'events': [{
            'id': e.id,
            'name': e.name,
            'comp_id': e.comp_id
        } for e in events if e.comp_id == c.id]
    } for c in comps])

@app.route('/competitions/<int:comp_id>', methods=['GET'])
def get_competition(comp_id):
    comp = Competition.query.get_or_404(comp_id)
    events = Event.query.filter_by(comp_id=comp.id).all()

    return jsonify({
        'id': comp.id,
        'event_location': comp.event_location,
        'name': comp.name,
        'date': comp.date,
        'events': [{
            'id': e.id,
            'name': e.name,
            'comp_id': e.comp_id
        } for e in events]
    })

# Routes for Events
# @app.route('/events', methods=['POST'])
# def create_event():
#     data = request.json
#     event = Event(**data)
#     db.session.add(event)
#     db.session.commit()
#     return jsonify({'message': 'Event created'}), 201

@app.route('/events', methods=['GET'])
def get_events():
    events = Event.query.all()

    return jsonify([{
        'id': e.id,
        'name': e.name,
        'comp_id': e.comp_id
    } for e in events])

@app.route('/competitions/<int:comp_id>/events', methods=['GET'])
def get_events_for_comp(comp_id):
    events = Event.query.filter_by(id=comp_id).all()

    return jsonify([{
        'id': e.id,
        'name': e.name,
        'comp_id': e.comp_id
    } for e in events])

# Routes for Event Submissions
# @app.route('/submissions', methods=['POST'])
# def submit_result():
#     data = request.json
#     submission = EventSubmission(**data)
#     db.session.add(submission)
#     db.session.commit()
#     return jsonify({'message': 'Submission created'}), 201

@app.route('/submissions', methods=['GET'])
def get_submissions():
    submissions = EventSubmission.query.all()

    return jsonify([{
        'id': s.id,
        'result': s.result,
        'event_id': s.event_id,
        'athlete_id': s.athlete_id
    } for s in submissions])

@app.route('/events/<int:event_id>/submissions', methods=['GET'])
def get_submissions_for_event(event_id):
    subs = EventSubmission.query.filter_by(id=event_id).all()

    return jsonify([{
        'id': s.id,
        'result': s.result,
        'event_id': s.event_id,
        'athlete_id': s.athlete_id
    } for s in subs])

@app.route('/teams/<int:team_id>/athletes', methods=['GET'])
def get_athletes_in_team(team_id):
    athletes = Athlete.query.filter_by(teamID=team_id).all()

    return jsonify([{
        'id': a.id,
        'first_name': a.first_name,
        'last_name': a.last_name
    } for a in athletes])


# Endpoints for news.
@app.route("/news", methods=["GET"])
def news():
    limit = int(request.args.get('limit', 100))

    articles = get_news()

    return jsonify(
        articles=articles[slice(limit)]
    )

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
