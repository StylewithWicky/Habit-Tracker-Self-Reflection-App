from flask import request,jsonify,Blueprint
from models import db, User

user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/register' , methods=['POST'])
def register():
    data=request.get_json()
    username=data.get('username').strip()
    email=data.get('email').strip().lower()
    password=data.get('password').strip()


    if not username or not email or not password:
        return jsonify({'error':'Authentication required'}),400
    
    if User.query.filter_by(email=email).first():
        return jsonify ({'error':'Email registered'}),400

    user=User(username=username ,email=email)
    user.set_password(password)

    db.session.add(user)
    db.session.commit()

    return jsonify({'message':'User registered succesfully'}),201