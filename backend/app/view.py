from app import app
from flask import render_template

@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/news")
def news():
   return "News"

@app.route("/events")
def events():
    return "Events"

@app.route("/organizations")
def organizations():
    return "Organizations"

@app.route("/contacts")
def contacts():
    return "Contacts"

@app.route("/auth")
def auth():
    return render_template("auth.html")

@app.route("/registration")
def registation():
    return "Registration"