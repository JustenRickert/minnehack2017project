from whereami.learn import learn
from whereami.predict import locations, predict
import subprocess
from flask import (
    render_template,
    request,
)

from . import (
    app,
    sockets,
)
from .models import *

def talk(sentence):
    subprocess.call(['./say', sentence])

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        text = request.form["text"]
        post = Post(text)
        db.session.add(post)
        db.session.commit()
    posts = Post.query.order_by(Post.date_posted.asc()).all()
    return render_template("index.html", posts=posts, config=app.config["PORT"])

@app.route("/room")
def whereami_predict():
    prediction = predict()
    talk('the current room is the '+fake_name_to_real_name(prediction))
    return predict()

def fake_name_to_real_name(fake):
    return {
        'coding_spo': 'bedroom',
        'back': 'bathroom',
        'stage': 'livingroom',
        'sleeping_area': 'frontdoor',
    }[fake]
