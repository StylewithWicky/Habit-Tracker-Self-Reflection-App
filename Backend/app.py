from flask import Flask
from flask_cors import CORS
from config import Config
from models import db
from controllers.auth_controllers import user_bp
from controllers.login_controller import login_bp

app = Flask(__name__)
app.config.from_object(Config)

# ✅ Correct CORS setup
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

db.init_app(app)

app.register_blueprint(user_bp)
app.register_blueprint(login_bp)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
