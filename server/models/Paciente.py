class Paciente:
    def __init__(self, id, nombre, edad):
        self.id = id
        self.nombre = nombre
        self.edad = edad

    def __repr__(self):
        return f"Paciente({self.id}, {self.nombre}, {self.edad})"
