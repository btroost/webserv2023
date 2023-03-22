from flask import Flask, url_for, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("base.html")
    #return "<p>Hello, World!</p>"
