from . import app
from .models import *

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        text = request.form["text"]
        post = Post(text)
        db.session.add(post)
        db.session.commit()
    posts = Post.query.order_by(Post.date_posted.asc()).all()
    return render_template("index.html", posts=posts, config=app.config["PORT"])


@app.route("/test")
def whereami_predict():
    return predict()
