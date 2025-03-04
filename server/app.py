from flask import Flask
from flask_cors import CORS
from routes.doctorRoutes import doctors_bp
app = Flask(__name__)
CORS(app)

app.register_blueprint(doctors_bp, url_prefix='/Doctors')

@app.route ("/")
def home():
    return {"message": "Servidor Flask funcionando perra"}



if __name__ == "__main__":
    app.run(debug = True)