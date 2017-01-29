import subprocess
from multiprocessing import Process

from whereami.learn import learn
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


@app.route("/learn", methods=["GET", "POST"])
def api_learn():
    name = request.form["areaName"]
    def func():
        try:
            Area.learn(name)
            area = Area(name)
            db.session.add(area)
            db.session.commit()
        except LearnLocation:
            pass
    p = Process(target=func)
    p.start()
    return index()


@app.route("/room")
def whereami_predict():
    prediction = predict()
    talk('the current room is the '+fake_name_to_real_name(prediction))
    print(prediction)
    return prediction


def talk(sentence):
    subprocess.call(['./bin/say', sentence])


def fake_name_to_real_name(fake):
    return {
        'coding_spo': 'bedroom',
        'back': 'bathroom',
        'stage': 'livingroom',
        'sleeping_area': 'frontdoor',
    }[fake]
