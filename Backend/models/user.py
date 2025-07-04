from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from . import db



class User(db.Model):
    id=db.Column(db.Integer,primary_key=True ,autoincrement=True)
    username=db.Column(db.String, nullable=False)
    email=db.Column(db.String, nullable=False)
    password_hash=db.Column(db.String, nullable=False)

    def set_password(self,password):
        self.password_hash=generate_password_hash(password)
    def check_password(self,password):
        return check_password_hash(self.password_hash,password)