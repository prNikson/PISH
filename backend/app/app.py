from flask import Flask
from config import Configuration

from posts.blueprint import posts

app = Flask(__name__, template_folder='../../frontend/html/', static_folder='../../frontend/static/')
app.config.from_object(Configuration)

app.register_blueprint(posts, url_prefix='/news')