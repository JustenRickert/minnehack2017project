from whereami.learn import learn
from whereami.predict import locations, predict

from flask import (
    Flask,
    render_template,
    request,
)

from flask_sockets import Sockets
from flask_pytest import FlaskPytest
from flask_sqlalchemy import SQLAlchemy
from config import BaseConfig

app = Flask(__name__)
app.config.from_object(BaseConfig)
db = SQLAlchemy(app)
sockets = Sockets(app)
# app = FlaskPytest(app)


from models import *


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
    # print(locations())
    # print(predict())
    return predict()

if __name__ == "__main__":
    # print(predict())
    # print(locations())
    db.create_all()
    app.run('0.0.0.0', port=app.config["PORT"])
