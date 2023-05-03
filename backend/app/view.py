from app import app
from flask import render_template

@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/events")
def events():
    return "Events"

@app.route("/organizations")
def organizations():
    return "Organizations"

@app.route("/contacts")
def contacts():
    return render_template("contacts.html")

@app.route("/auth")
def auth():
    return "Auth"

@app.route("/registration")
def registation():
    return "Registration"