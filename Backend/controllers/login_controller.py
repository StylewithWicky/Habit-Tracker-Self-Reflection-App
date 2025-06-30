from flask import Blueprint,jsonify,request
from models import User
from werkzeug.security import generate_password_hash, check_password_hash

login_bp=Blueprint('login_bg', __name__)
def login():
    data=request.get_json()
    email=data.get('email','').strip()
    password=data.get('password','').strip()

    if not  not email or not password:
        return jsonify({'error':'Personal information required'}),400

    user=User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password_hash,password):
        return jsonify({'error':'Invalid email or passwors'}),401
    
    return jsonify({
        'message':'login successful',
        'user':{
            'id':user.id,
            'username':user.username,
            'email':user.email

        }
    }),200