from flask import Flask, request, jsonify
from models import db, School, Team, Athlete, Competition, Event, EventSubmission
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:miaen123@localhost/athletic_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
@app.route("/test-db")
def test_db():
    try:
        # Create a school
        school = School(schoolName="Test School", mascot="Tigers")
        db.session.add(school)
        db.session.commit()

        # Create a team
        team = Team(teamName="Test Team", sport="Basketball", conference="Big East", headCoach="Coach Carter", schoolID=school.schoolID)
        db.session.add(team)
        db.session.commit()

        # Create an athlete
        athlete = Athlete(firstName="John", lastName="Doe", age=20, mainEvent="100m", teamID=team.teamID)
        db.session.add(athlete)
        db.session.commit()

        # Create a competition
        competition = Competition()
        db.session.add(competition)
        db.session.commit()

        # Create an event
        event = Event(eventName="100m Finals", compID=competition.compID)
        db.session.add(event)
        db.session.commit()

        # Create a submission
        submission = EventSubmission(athleteID=athlete.athleteID, eventID=event.eventID, result="10.2s")
        db.session.add(submission)
        db.session.commit()

        # Query everything back
        schools = [s.schoolName for s in School.query.all()]
        teams = [t.teamName for t in Team.query.all()]
        athletes = [f"{a.firstName} {a.lastName}" for a in Athlete.query.all()]
        competitions = [c.compID for c in Competition.query.all()]
        events = [e.eventName for e in Event.query.all()]
        submissions = [f"{s.result}" for s in EventSubmission.query.all()]

        return jsonify({
            "schools": schools,
            "teams": teams,
            "athletes": athletes,
            "competitions": competitions,
            "events": events,
            "submissions": submissions
        })

    except Exception as e:
        return str(e), 500
# Routes for Schools
@app.route('/schools', methods=['POST'])
def create_school():
    data = request.json
    school = School(**data)
    db.session.add(school)
    db.session.commit()
    return jsonify({'message': 'School created'}), 201

@app.route('/schools', methods=['GET'])
def get_schools():
    schools = School.query.all()
    return jsonify([{'schoolID': s.schoolID, 'schoolName': s.schoolName, 'mascot': s.mascot} for s in schools])

@app.route('/schools/<int:school_id>', methods=['GET'])
def get_school(school_id):
    school = School.query.get_or_404(school_id)
    return jsonify({'schoolID': school.schoolID, 'schoolName': school.schoolName, 'mascot': school.mascot})

@app.route('/schools/<int:school_id>', methods=['PUT'])
def update_school(school_id):
    data = request.json
    school = School.query.get_or_404(school_id)
    school.schoolName = data.get('schoolName', school.schoolName)
    school.mascot = data.get('mascot', school.mascot)
    db.session.commit()
    return jsonify({'message': 'School updated'})

@app.route('/schools/<int:school_id>', methods=['DELETE'])
def delete_school(school_id):
    school = School.query.get_or_404(school_id)
    db.session.delete(school)
    db.session.commit()
    return jsonify({'message': 'School deleted'})

# Routes for Teams
@app.route('/teams', methods=['POST'])
def create_team():
    data = request.json
    team = Team(**data)
    db.session.add(team)
    db.session.commit()
    return jsonify({'message': 'Team created'}), 201

@app.route('/teams', methods=['GET'])
def get_teams():
    teams = Team.query.all()
    return jsonify([{'teamID': t.teamID, 'teamName': t.teamName, 'sport': t.sport, 'conference': t.conference, 'headCoach': t.headCoach, 'schoolID': t.schoolID} for t in teams])

@app.route('/teams/<int:team_id>', methods=['GET'])
def get_team(team_id):
    team = Team.query.get_or_404(team_id)
    return jsonify({'teamID': team.teamID, 'teamName': team.teamName, 'sport': team.sport, 'conference': team.conference, 'headCoach': team.headCoach, 'schoolID': team.schoolID})

@app.route('/teams/<int:team_id>', methods=['PUT'])
def update_team(team_id):
    data = request.json
    team = Team.query.get_or_404(team_id)
    team.teamName = data.get('teamName', team.teamName)
    team.sport = data.get('sport', team.sport)
    team.conference = data.get('conference', team.conference)
    team.headCoach = data.get('headCoach', team.headCoach)
    db.session.commit()
    return jsonify({'message': 'Team updated'})

@app.route('/teams/<int:team_id>', methods=['DELETE'])
def delete_team(team_id):
    team = Team.query.get_or_404(team_id)
    db.session.delete(team)
    db.session.commit()
    return jsonify({'message': 'Team deleted'})

# Routes for Athletes
@app.route('/athletes', methods=['POST'])
def create_athlete():
    data = request.json
    athlete = Athlete(**data)
    db.session.add(athlete)
    db.session.commit()
    return jsonify({'message': 'Athlete created'}), 201

@app.route('/athletes', methods=['GET'])
def get_athletes():
    athletes = Athlete.query.all()
    return jsonify([{'athleteID': a.athleteID, 'firstName': a.firstName, 'lastName': a.lastName, 'age': a.age, 'mainEvent': a.mainEvent, 'teamID': a.teamID} for a in athletes])

@app.route('/athletes/<int:athlete_id>', methods=['GET'])
def get_athlete(athlete_id):
    athlete = Athlete.query.get_or_404(athlete_id)
    return jsonify({'athleteID': athlete.athleteID, 'firstName': athlete.firstName, 'lastName': athlete.lastName, 'age': athlete.age, 'mainEvent': athlete.mainEvent, 'teamID': athlete.teamID})

@app.route('/athletes/<int:athlete_id>', methods=['PUT'])
def update_athlete(athlete_id):
    data = request.json
    athlete = Athlete.query.get_or_404(athlete_id)
    athlete.firstName = data.get('firstName', athlete.firstName)
    athlete.lastName = data.get('lastName', athlete.lastName)
    athlete.age = data.get('age', athlete.age)
    athlete.mainEvent = data.get('mainEvent', athlete.mainEvent)
    db.session.commit()
    return jsonify({'message': 'Athlete updated'})

@app.route('/athletes/<int:athlete_id>', methods=['DELETE'])
def delete_athlete(athlete_id):
    athlete = Athlete.query.get_or_404(athlete_id)
    db.session.delete(athlete)
    db.session.commit()
    return jsonify({'message': 'Athlete deleted'})

# Routes for Competitions
@app.route('/competitions', methods=['POST'])
def create_competition():
    comp = Competition()
    db.session.add(comp)
    db.session.commit()
    return jsonify({'message': 'Competition created', 'compID': comp.compID}), 201

@app.route('/competitions', methods=['GET'])
def get_competitions():
    comps = Competition.query.all()
    return jsonify([{'compID': c.compID} for c in comps])

# Routes for Events
@app.route('/events', methods=['POST'])
def create_event():
    data = request.json
    event = Event(**data)
    db.session.add(event)
    db.session.commit()
    return jsonify({'message': 'Event created'}), 201

@app.route('/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    return jsonify([{'eventID': e.eventID, 'eventName': e.eventName, 'compID': e.compID} for e in events])

@app.route('/competitions/<int:comp_id>/events', methods=['GET'])
def get_events_for_comp(comp_id):
    events = Event.query.filter_by(compID=comp_id).all()
    return jsonify([{'eventID': e.eventID, 'eventName': e.eventName} for e in events])

# Routes for Event Submissions
@app.route('/submissions', methods=['POST'])
def submit_result():
    data = request.json
    submission = EventSubmission(**data)
    db.session.add(submission)
    db.session.commit()
    return jsonify({'message': 'Submission created'}), 201

@app.route('/submissions', methods=['GET'])
def get_submissions():
    submissions = EventSubmission.query.all()
    return jsonify([{'submissionID': s.submissionID, 'athleteID': s.athleteID, 'eventID': s.eventID, 'result': s.result} for s in submissions])

@app.route('/events/<int:event_id>/submissions', methods=['GET'])
def get_submissions_for_event(event_id):
    subs = EventSubmission.query.filter_by(eventID=event_id).all()
    return jsonify([{'submissionID': s.submissionID, 'athleteID': s.athleteID, 'result': s.result} for s in subs])

@app.route('/teams/<int:team_id>/athletes', methods=['GET'])
def get_athletes_in_team(team_id):
    athletes = Athlete.query.filter_by(teamID=team_id).all()
    return jsonify([{'athleteID': a.athleteID, 'firstName': a.firstName, 'lastName': a.lastName} for a in athletes])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
