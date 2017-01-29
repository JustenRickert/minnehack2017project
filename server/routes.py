import schedule
import subprocess
import time
from multiprocessing import Process

from sqlalchemy.exc import IntegrityError
from whereami.predict import locations, predict
from flask import (
    render_template,
    request,
)

from . import (
    app,
    sockets,
)
from .models import *

@app.route("/", methods=["GET"])
def index():
    areas = Area.query.order_by(Area.date_posted.asc()).all()
    areas = [Area("coding_spo"), Area("back"), Area("stage"), Area("sleeping_area")]
    return render_template("index.html", areas=areas, config=app.config["PORT"])

# @app.route("/room")
# def api_whereami_predict():
#     try:
#         name = predict()
#         area = Area(name)
#         tick = AreaTick(area.id)
#         db.session.add(tick)
#         db.session.commit()
#         return name
#     except LearnLocation:
#         return "None"


# @app.route("/learn", methods=["GET", "POST"])
# def api_learn():
#     name = request.form["areaName"]
#     def func():
#         try:
#             Area.learn(name)
#             area = Area(name)
#             # db.session.add(area)
#             # db.session.commit()
#         except LearnLocation:
#             pass
#         except IntegrityError:
#             pass
#     p = Process(target=func)
#     p.start()
#     return index()



@app.route("/room")
def whereami_predict():
    prediction = predict()
    # talk('the current room is the '+fake_name_to_real_name(prediction))
    return prediction

@app.route("/sched")
def run_pending_schedule():
    schedule.run_pending()
    return "schedule run"

def talk(sentence):
    subprocess.call(['./bin/say', sentence])

def fake_name_to_real_name(fake):
    return {
        'coding_spo': 'bedroom',
        'back': 'bathroom',
        'stage': 'livingroom',
        'sleeping_area': 'frontdoor',
    }[fake]

def Metformin():
    talk("Take your Metformin Medication")

def AntiThyroid():
    talk("Take your AntiThyroid Medication")

def Tylenol():
    talk("Take some tylenol.")

def Alarm():
    talk("Wake up! It's 7am")

# schedule.every().day.at("05:00").do(Metformin)
# schedule.every().day.at("08:00").do(AntiThyroid)
# schedule.every().day.at("13:36").do(Tylenol)
schedule.every().minute.do(Metformin)
schedule.every().day.at("14:02").do(Alarm)
