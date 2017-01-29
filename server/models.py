import datetime

from sqlalchemy.orm import relationship
from whereami.learn import learn
from whereami.predict import locations, predict
from whereami.pipeline import LearnLocation

from . import db


class Area(db.Model):
    __tablename__ = "area"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False, unique=True)
    dates = relationship("AreaTick")
    date_posted = db.Column(db.DateTime, nullable=False)

    def predict():
        return Area(predict())

    def learn(name):
        learn(name, 1000)

    def locations():
        return locations()

    def __init__(self, name):
        self.name = name
        self.date_posted = datetime.datetime.now()

class AreaTick(db.Model):
    __tablename__ = "areaTick"

    id = db.Column(db.Integer, primary_key=True)
    area_id = db.Column(db.Integer, db.ForeignKey("area.id"))
    date_posted = db.Column(db.DateTime, nullable=False)

    def __init__(self, area_id):
        self.area_id = area_id
        self.date_posted = datetime.datetime.now()


















class Post(db.Model):
    __tablename__ = "posts"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False)

    def __init__(self, text):
        self.text = text
        self.date_posted = datetime.datetime.now()
