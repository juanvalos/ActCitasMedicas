# Sistema de Citas Médicas (MVC)

Este repositorio contiene la implementación de un sistema de citas médicas utilizando el patrón de diseño MVC. El proyecto está dividido en dos partes principales: el **servidor (backend)** desarrollado en Python con Flask y el **cliente (frontend)** desarrollado en React.

---

## Requisitos

- **Python**
- **Node.js** (incluye npm)

---

## Pasos para Ejecutar el Proyecto

### 1. Clonar el Repositorio

Abre una terminal y clona el repositorio usando el siguiente comando:

```bash
git clone https://github.com/juanvalos/ActCitasMedicas.git
```

Luego, navega a la carpeta del proyecto:

```bash
cd <nombre_del_repositorio>
```

### 2. Configuración y Ejecución del Servidor (Server)

1. **Crear un entorno virtual:**

   ```bash
   python -m venv venv
   ```

2. **Activar el entorno virtual:**

   - En Windows:
     ```bash
     venv\Scripts\Activate
     ```
   - En macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

3. **Instalar las dependencias:**

   Asegúrate de tener un archivo `requirements.txt` en la carpeta del servidor y ejecuta:

   ```bash
   pip install -r requirements.txt
   ```

4. **Ejecutar el servidor:**

   Una vez instaladas las dependencias, inicia el servidor con:

   ```bash
   python app.py
   ```

   El servidor se ejecutará en `http://localhost:5000`.

### 3. Configuración y Ejecución del Cliente (Client)

1. **Navegar a la carpeta del cliente:**

   Desde la carpeta raíz del proyecto, cambia a la carpeta `client`:

   ```bash
   cd client
   ```

2. **Instalar las dependencias de Node.js:**

   Ejecuta el siguiente comando:

   ```bash
   npm install
   ```

3. **Ejecutar la aplicación de React:**

   Inicia la aplicación localmente con:

   ```bash
   npm run dev
   ```

   La aplicación se ejecutará usualmente en `http://localhost:5173`.


## Notas Adicionales

- **Credenciales:** Verifica que las credenciales en `config.py` estén correctamente configuradas para conectarse a Supabase.
- **Dependencias:** Asegúrate de tener instaladas las versiones compatibles de Python y Node.js.
- **Errores:** Si encuentras algún problema durante la instalación o ejecución, revisa los mensajes de error en la consola para identificar la causa.
