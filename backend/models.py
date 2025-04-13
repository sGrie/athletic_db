from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class School(db.Model):
    __tablename__ = 'school'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    mascot = db.Column(db.String(50))

    # teams = db.relationship('Team', backref='school', lazy=True)

class Competition(db.Model):
    __tablename__ = 'competition'

    id = db.Column(db.Integer, primary_key=True)
    event_location = db.Column(db.String(20))
    name = db.Column(db.String(25))
    date = db.Column(db.Date)

    # events = db.relationship('Event', backref='competition', lazy=True)

class Team(db.Model):
    __tablename__ = 'team'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    head_coach = db.Column(db.String(50))
    conference = db.Column(db.String(50))
    sport = db.Column(db.String(50), nullable=False)
    school_id = db.Column(db.Integer, db.ForeignKey('School.id'), nullable=False)

    # athletes = db.relationship('Athlete', backref='team', lazy=True)

class Athlete(db.Model):
    __tablename__ = 'athlete'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    country_code = db.Column(db.String(2), nullable=False)
    age = db.Column(db.Integer)
    main_event = db.Column(db.String(50))
    team_id = db.Column(db.Integer, db.ForeignKey('Team.id'), nullable=False)

    # submissions = db.relationship('EventSubmission', backref='athlete', lazy=True)

class Event(db.Model):
    __tablename__ = 'event'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    comp_id = db.Column(db.Integer, db.ForeignKey('Competition.id'), nullable=False)

    # submissions = db.relationship('EventSubmission', backref='event', lazy=True)

class EventSubmission(db.Model):
    __tablename__ = 'event_submission'

    id = db.Column(db.Integer, primary_key=True)
    result = db.Column(db.String(50), nullable=False)
    athlete_id = db.Column(db.Integer, db.ForeignKey('Athlete.id'), nullable=False) 
    event_id = db.Column(db.Integer, db.ForeignKey('Event.id'), nullable=False)
