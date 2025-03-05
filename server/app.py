from flask import Flask
from flask_cors import CORS
from routes.doctorRoutes import doctors_bp
from routes.patientRoutes import patients_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(doctors_bp, url_prefix='/doctors')
app.register_blueprint(patients_bp, url_prefix = '/patients')

@app.route ("/")
def home():
    return {"message": "Servidor Flask funcionando perra"}



if __name__ == "__main__":
    app.run(debug = True)