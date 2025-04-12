# seed_data.py
from models import db, School, Team, Athlete, Competition, Event, EventSubmission
from app import app


with app.app_context():
    # Clear existing data
    db.drop_all()
    db.create_all()

    # Create sample school
    school1 = School(schoolName="Oakland University", mascot="Golden Grizzly")
    school2 = School(schoolName="Youngstown", mascot="Penguins")

    # Create teams
    team1 = Team(teamName="Oakland Swim&dive", sport="Swim & Dive", conference="Horizon Leauge", headCoach="Mitch Alters", school=school1)
    team2 = Team(teamName="Oakland Trach&field", sport="Track & Field", conference="Horizon Leauge", headCoach="Coach Lee", school=school2)

    # Create athletes
    athlete1 = Athlete(firstName="John", lastName="Doe", age=24, mainEvent="100y Freestyle", team=team1)
    athlete2 = Athlete(firstName="Jane", lastName="Smith", age=27, mainEvent="Long Jump", team=team2)

    # Create competition
    comp1 = Competition()

    # Create events
    event1 = Event(eventName="100y Freestyle", competition=comp1)
    event2 = Event(eventName="Long Jump", competition=comp1)

    # Create event submissions
    submission1 = EventSubmission(athlete=athlete1, event=event1, result="50.1s")
    submission2 = EventSubmission(athlete=athlete2, event=event2, result="6.4m")

    # Add to session and commit
    db.session.add_all([school1, school2, team1, team2, athlete1, athlete2, comp1, event1, event2, submission1, submission2])
    db.session.commit()

    print("✅ Database seeded successfully!")
