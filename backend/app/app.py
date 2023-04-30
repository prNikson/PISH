from flask import Flask
from config import Configuration

app = Flask(__name__, template_folder='../../frontend/html/')
app.config.from_object(Configuration)