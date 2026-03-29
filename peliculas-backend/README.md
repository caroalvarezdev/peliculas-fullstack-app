#  API REST - Gestión de Películas

Proyecto desarrollado para la asignatura **Ingeniería Web II**.

## Descripción

API REST construida con **Node.js**, **Express** y **MongoDB Atlas** para la gestión administrativa de películas y series.

Permite administrar los siguientes módulos:

- Género
- Director
- Productora
- Tipo
- Media (Películas y Series)

La API implementa arquitectura monolítica y relaciones entre entidades utilizando referencias con Mongoose.

---

##  Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose (ODM)
- Postman (pruebas de API)
- Git & GitHub

---

## Estructura del proyecto

peliculas-backend/
│
├── db/
├── models/
├── routes/
├── index.js
├── package.json
└── package-lock.json


---

## Funcionalidades

- CRUD completo en todos los módulos
- Relaciones entre entidades con `.populate()`
- Base de datos NoSQL en la nube
- Validación de persistencia de datos
- Pruebas realizadas con Postman

---

## ▶ Cómo ejecutar el proyecto

1. Clonar el repositorio
2. Instalar dependencias: npm install
3. Ejecutar el servidor: node index.js
4. Probar en Postman: http://localhost:4000

---

##  Endpoints principales

- `/api/generos`
- `/api/directores`
- `/api/productoras`
- `/api/tipos`
- `/api/medias`

---

Proyecto académico con fines educativos.
Realizado por: Carolina Álvarez R.




