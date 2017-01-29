import os


_root_dir = os.path.dirname(os.path.realpath(__name__))

class BaseConfig(object):
    SECRET_KEY = "trolololo"
    DEBUG = True
    PORT = 8080
    # DB_NAME ="postgres"
    # DB_USER ="postgres"
    # DB_PASS ="postgres"
    # DB_SERVICE = "hackathon"
    # DB_PORT = "5432"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # SQLALCHEMY_DATABASE_URI = "postgresql://{0}:{1}@{2}:{3}/{4}".format(
    #     DB_USER, DB_PASS, DB_SERVICE, DB_PORT, DB_NAME)
    SQLALCHEMY_DATABASE_URI = ("sqlite:///{}/test.db".format(_root_dir))
