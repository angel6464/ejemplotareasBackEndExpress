# ejemplotareasBackEndExpress
Back End Ejemplo de Tareas con Express Nodejs.
Una pequeña aplicación de ejemplo para usarla en forma de despliegue de una apps, representa el backend y esta montada empleando NodeJS, debes tener instalado una version de node 12

### Configuracion

Este proyecto requiere una base de datos de MongoDB, la cual emplearemos desde la nube usando la cuenta gratis de Atlas Mongodb.
Se debe crear:
database: ejemplo
coleccion: Tarea

El archivo para poner la cadena de conexion es:
config.env

ahi va editar la url con sus datos de mongo atlas

## Arrancar el backend

## Paso 1: Instalar dependencias
Ejecute el siguiente comando en una consola para instalar todas las dependencias del proyecto
```
npm install
```

### Levantar la API
ejecute el siguiente comando para levantar localmente el proyecto y probarlo
```
npm start
```

Podra acceder por medio de la siguiente URL

##backend url
http://localhost:3000/tareas


Ejemplo de la cadena de conexion para mongo Atlas en el archivo config.evn

ATLAS_URI=mongodb+srv://backend:claveUsada123@sandbox.servidor.mongodb.net/ejemplo?retryWrites=true&w=majority

En localhost para una base local de mongodb esta es la cadena
ATLAS_URI=mongodb://localhost:27017/ejemplo

### Pruebras test
Utilizamos estos plugis
npm install mocha@10.7.3 chai@4.5.0 chai-http@4.4.0 --save-dev

Instalamos el plugin  npm i --save-dev @types/mongodb

en package json tiene que ir de esta manera en la parte del test
"test": "mocha --exit",

Version de nodeJs para que funcione
v18.20.4




#### Universidad de El Salvador

modificacion 2
