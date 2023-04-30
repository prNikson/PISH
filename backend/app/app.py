from flask import Flask
from config import Configuration

app = Flask(__name__, template_folder='../../frontend/html/', static_folder='../../frontend/static/')
app.config.from_object(Configuration)