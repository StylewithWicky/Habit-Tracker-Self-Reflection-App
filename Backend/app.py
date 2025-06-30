from flask import Flask
from flask_cors import CORS
from models import db
from config import Config
from controllers.auth_controllers import user_bp
from controllers.login_controller import login_bp

app=Flask(__name__)
app.config.from_object(Config)

CORS(app)
db.init_app(app)

@app.register_blueprint(user_bp)
@app.register_blueprint(login_bp)

@app.before_first_request
def create_tables():
    db.create_all()

if  __name__=='__main__':
    app.run(debug=True)