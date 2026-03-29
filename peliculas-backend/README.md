Proyecto desarrollado para la asignatura Ingeniería Web II.

---

## 📌 Descripción

API REST construida con Node.js, Express y MongoDB Atlas para la gestión administrativa de contenido audiovisual como películas y series.

Permite administrar los siguientes módulos:

- Género  
- Director  
- Productora  
- Tipo  
- Media (Películas y Series)  

La API implementa una arquitectura monolítica y establece relaciones entre entidades mediante referencias utilizando Mongoose.

---

## 🚀 Tecnologías utilizadas

- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose (ODM)  
- Postman (pruebas de API)  
- Git & GitHub  

---

## 📁 Estructura del proyecto

peliculas-backend/
│
├── db/
├── models/
├── routes/
├── index.js
├── package.json
└── package-lock.json

---

## 🌐 Despliegue

La API se encuentra desplegada en la nube mediante Render y es accesible en la siguiente URL:

👉 https://api-peliculas-mpfc.onrender.com/

---

## ⚙️ Ejecución local

Para ejecutar el proyecto en entorno local:

Clonar el repositorio  
Instalar dependencias: npm install  
Ejecutar el servidor: node index.js  

La API estará disponible en:  
http://localhost:4000

---

## 🔗 Endpoints principales

- /api/generos  
- /api/directores  
- /api/productoras  
- /api/tipos  
- /api/medias  

---

## 🎯 Funcionalidades

- CRUD completo en todos los módulos  
- Relaciones entre entidades utilizando .populate()  
- Persistencia de datos en base de datos NoSQL en la nube  
- Validación y gestión de datos  
- Pruebas realizadas mediante Postman  

---

## 👩‍💻 Autora

Carolina Álvarez R  
Estudiante Tecnología en Desarrollo de Software

---