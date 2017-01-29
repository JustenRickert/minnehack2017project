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

from server.config import BaseConfig

app = Flask(__name__)
app.config.from_object(BaseConfig)
db = SQLAlchemy(app)
sockets = Sockets(app)
# app = FlaskPytest(app)
