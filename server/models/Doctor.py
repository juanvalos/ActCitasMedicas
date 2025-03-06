class Doctor:
    def __init__(self, id, nombre, contacto, especialidad):
        self.id = id
        self.nombre = nombre
        self.contacto = contacto
        self.especialidad = especialidad

    def __repr__(self):
        return f"Doctor({self.id}, {self.nombre}, {self.contacto}, {self.especialidad})"
