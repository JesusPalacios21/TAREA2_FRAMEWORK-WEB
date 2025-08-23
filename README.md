### 📝 Descripción del Proyecto

Este es un proyecto web sencillo para gestionar un **listado de productos**. Permite a los usuarios realizar las operaciones básicas de un CRUD (Crear, Leer, Actualizar, Borrar) sobre los productos, interactuando con una base de datos. Es una herramienta práctica para aprender los fundamentos del desarrollo web con Node.js, Express y MySQL.

-----

### 🚀 Tecnologías Utilizadas

  * **Node.js**: Entorno de ejecución del servidor.
  * **Express**: Framework para la creación de rutas y servidor web.
  * **EJS (Embedded JavaScript)**: Motor de plantillas para generar HTML dinámicamente.
  * **MySQL2**: Para conectar con MySQL.
  * **dotenv**: Módulo para gestionar las variables de entorno de forma segura.
  * **Nodemon** (opcional): Herramienta que reinicia automáticamente el servidor al detectar cambios.

-----

### 💻 Cómo Ejecutar el Proyecto

Sigue estos pasos para poner el proyecto en funcionamiento en tu máquina local.

#### 1\. Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

  * **Node.js**: Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
  * **MySQL Server**: Instala MySQL en tu PC. Puedes usar XAMPP para lo que es el motor de mysql.

#### 2\. Configuración de la Base de Datos

1.  Dentro del proyecto en una carpeta llamada **database**, hay un archivo *.sql*.

2.  Allí dentro hay una BD, ejecuta los siguiente códigos SQL para crear la tabla `productos`:

    ```sql
    CREATE TABLE productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        descripcion TEXT,
        precio DECIMAL(10, 2) NOT NULL
    );
    ```

#### 3\. Instalación y Configuración del Proyecto

1.  Abre la terminal o el símbolo del sistema.

2.  Navega hasta la carpeta raíz del proyecto.

3.  Ejecuta el siguiente comando para instalar todas las dependencias:

    ```bash
    npm install
    ```

4.  Crea un archivo llamado **`.env`** en la carpeta raíz del proyecto.

5.  Copia y pega el siguiente contenido en el archivo `.env`, y reemplaza los valores con los de tu configuración de MySQL:

    ```env
    DB_HOST=localhost
    DB_USER=tu_usuario_de_mysql
    DB_PASSWORD=tu_contraseña_de_mysql
    DB_NAME=nombre_de_tu_base_de_datos
    DB_PORT=3306
    ```

    (El `DB_PORT` por defecto es `3306`, a menos que lo hayas cambiado y lo tengas en `3307` tal vez.).

#### 4\. Iniciar la Aplicación

1.  En la misma terminal, ejecuta el siguiente comando para iniciar el servidor:

    ```bash
    npm start
    ```

2.  Si todo está correcto, verás un mensaje en la terminal que indica que el servidor se ha iniciado.

3.  Abre tu navegador web y visita la siguiente dirección:

    ```
    http://localhost:3000
    ```

-----

### 📂 Estructura del Proyecto

  * `app.js`: Archivo principal de la aplicación.
  * `routes/productos.js`: Contiene todas las rutas y la lógica del servidor.
  * `views/`: Carpeta con los archivos `.ejs` (vistas) que el usuario ve.
      * `create.ejs`: Formulario para crear productos.
      * `listar.ejs`: Muestra el listado de productos.
      * `index.ejs`:Bienvenida al proyecto.
      * `edit.ejs`: Formulario para editar un producto existente.
      * `partials/`: Contiene fragmentos de código reutilizables como el encabezado y el pie de página.
  * `config/db.js`: Archivo de configuración para la conexión a la base de datos.

