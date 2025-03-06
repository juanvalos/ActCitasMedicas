from flask import Flask
from flask_cors import CORS
from controllers.doctorController import doctors_bp
from controllers.patientController import patients_bp
from controllers.appointmentsController import appointments_bp

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.register_blueprint(doctors_bp, url_prefix='/doctors')
app.register_blueprint(patients_bp, url_prefix='/patients')
app.register_blueprint(appointments_bp, url_prefix='/appointments')

@app.route("/")
def home():
    return {"message": "Servidor Flask funcionando correctamente"}

if __name__ == "__main__":
    app.run(debug=True)
