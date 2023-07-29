from flask import Flask, render_template
from flask_socketio import SocketIO, send 

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on("message")
def message_manage(mensagem):
    send(mensagem, broadcast=True)
# primeira pagina
@app.route("/")
def homepage():
    return render_template("index.html")

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0")
                           