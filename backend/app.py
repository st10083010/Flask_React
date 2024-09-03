from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # 設定CORS, 處理跨域問題

@app.route('/')
def home():
    result = {
        "status": 0,
        "msg": "Great success, here is home page."
    }

    return jsonify(result)

@app.route('/api/hello')
def hello():
    result = {
        "status": 0,
        "msg": "here is hello api"
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
