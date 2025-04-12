from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class School(db.Model):
    __tablename__ = 'schools'

    schoolID = db.Column(db.Integer, primary_key=True)
    schoolName = db.Column(db.String(100), nullable=False)
    mascot = db.Column(db.String(50))

    teams = db.relationship('Team', backref='school', lazy=True)


class Competition(db.Model):
    __tablename__ = 'competitions'

    compID = db.Column(db.Integer, primary_key=True)

    events = db.relationship('Event', backref='competition', lazy=True)


class Team(db.Model):
    __tablename__ = 'teams'

    teamID = db.Column(db.Integer, primary_key=True)
    teamName = db.Column(db.String(100), nullable=False)
    sport = db.Column(db.String(50), nullable=False)
    conference = db.Column(db.String(50))
    headCoach = db.Column(db.String(100))
    schoolID = db.Column(db.Integer, db.ForeignKey('schools.schoolID'), nullable=False)

    athletes = db.relationship('Athlete', backref='team', lazy=True)


class Athlete(db.Model):
    __tablename__ = 'athletes'

    athleteID = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer)
    mainEvent = db.Column(db.String(50))
    teamID = db.Column(db.Integer, db.ForeignKey('teams.teamID'), nullable=False)

    submissions = db.relationship('EventSubmission', backref='athlete', lazy=True)


class Event(db.Model):
    __tablename__ = 'events'

    eventID = db.Column(db.Integer, primary_key=True)
    eventName = db.Column(db.String(100), nullable=False)
    compID = db.Column(db.Integer, db.ForeignKey('competitions.compID'), nullable=False)

    submissions = db.relationship('EventSubmission', backref='event', lazy=True)


class EventSubmission(db.Model):
    __tablename__ = 'eventsubmission'
    submissionID = db.Column(db.Integer, primary_key=True)
    athleteID = db.Column(db.Integer, db.ForeignKey('athletes.athleteID'), nullable=False) 
    eventID = db.Column(db.Integer, db.ForeignKey('events.eventID'), nullable=False)
    result = db.Column(db.String(50), nullable=False)
