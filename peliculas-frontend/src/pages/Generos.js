import { useEffect, useState } from "react";
import api from "../services/api";

function Generos() {

  const [generos, setGeneros] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [idEditar, setIdEditar] = useState(null);

  useEffect(() => {
    obtenerGeneros();
  }, []);

  const obtenerGeneros = async () => {
    try {
      const res = await api.get("/generos");
      setGeneros(res.data);
    } catch (error) {
      console.error("Error al obtener generos:", error);
    }
  };

const crearGenero = async (e) => {
  e.preventDefault();

  try {
    if (idEditar) {
  await api.put(`/generos/${idEditar}`, {
    nombre,
    descripcion
  });
} else {
  await api.post("/generos", {
    nombre,
    descripcion
  });
}

    setNombre("");
    setDescripcion("");
    setIdEditar(null);

    obtenerGeneros();
  } catch (error) {
    console.error("Error al crear genero:", error);
  }
};

const eliminarGenero = async (id) => {
  try {
    await api.delete(`/generos/${id}`);
    obtenerGeneros();
  } catch (error) {
    console.error("Error al eliminar genero:", error);
  }
};

const seleccionarGenero = (genero) => {
  setNombre(genero.nombre);
  setDescripcion(genero.descripcion);
  setIdEditar(genero._id);
};


  return (
    <div className="container mt-4">

<h2>Crear Género</h2>

<form onSubmit={crearGenero}>

  <input
    className="form-control mb-2"
    placeholder="Nombre"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
  />

  <input
    className="form-control mb-2"
    placeholder="Descripción"
    value={descripcion}
    onChange={(e) => setDescripcion(e.target.value)}
  />

  <button className="btn btn-primary">
    Guardar
  </button>

</form>

<hr />

      <h2>Lista de Géneros</h2>

      <table className="table table-bordered">
        <thead>
         <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
        </tr>
        </thead>

        <tbody>
          {generos.map((g) => (
            <tr key={g._id}>
                <td>{g.nombre}</td>
                <td>{g.descripcion}</td>
               <td>
             <button
                 className="btn btn-warning me-2"
                 onClick={() => seleccionarGenero(g)}
              >
              Editar
             </button>

  <button
    className="btn btn-danger"
    onClick={() => eliminarGenero(g._id)}
  >
    Eliminar
  </button>
</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Generos;