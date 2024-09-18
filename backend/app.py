from flask import Flask, jsonify, render_template, send_from_directory
from flask_cors import CORS
from pathlib import Path


template_folder = Path().resolve() / "react_app" / "dist"
static_folder = template_folder / "assets"

app = Flask(__name__, template_folder=template_folder, static_folder=static_folder)
CORS(app) # 設定CORS, 處理跨域問題

@app.route('/')
@app.route('/<path:path>')
def home(path=None):
    template_path = "index.html"

    return render_template(template_path)

@app.route('/api/login')
def login():
    result = {
        "status": 0,
        "msg": "login successful."
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
