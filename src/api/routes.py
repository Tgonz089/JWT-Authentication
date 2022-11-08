"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
import os
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route("/signup", methods=["POST"])
def sign_up():
   email = request.json.get("email",None)
   password = request.json.get("password", None)
   is_active = request.json.get("is_active", None)
       
   user = User(email = email, password = password, is_active = is_active)
   json= request.get_json()

   db.session.add(user)
   db.session.commit()
       
   return jsonify([]), 200

# @api.route("/login", methods=["POST"])
# def login():
#     email = request.json.get("email", None)
#     password = request.json.get("pass", None)
#     user = User.query.filter_by(email=email).one_or_none()
#     if user is not None:
#         if user.check_password_hash(password):
#             access_token = create_access_token(identity=email)
#             return jsonify(access_token=access_token)
#     return jsonify({"msg": "Invalid cedentials."}), 401


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():

    message ={
       "message": "hello world" 
    }
    return jsonify(message)