class Cita:
    def __init__(self, id, motivoConsulta, idDoctor, fecha, idPaciente, estado=False):
        self.id = id
        self.motivoConsulta = motivoConsulta
        self.idDoctor = idDoctor
        self.fecha = fecha
        self.idPaciente = idPaciente
        self.estado = estado

    def __repr__(self):
        return f"Cita({self.id}, {self.motivoConsulta}, {self.idDoctor}, {self.fecha}, {self.idPaciente}, {self.estado})"
