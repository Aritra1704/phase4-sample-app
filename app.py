from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, Railway-ready App!'

if __name__ == '__main__':
    app.run(debug=True)