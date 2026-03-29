import { useEffect, useState } from "react";
import api from "../services/api";

function Director() {

  const [directores, setDirectores] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [idEditar, setIdEditar] = useState(null);

  useEffect(() => {
    obtenerDirectores();
  }, []);

  const obtenerDirectores = async () => {
    try {
      const res = await api.get("/directores");
      setDirectores(res.data);
    } catch (error) {
      console.error("Error al obtener directores:", error);
    }
  };

const crearDirector = async (e) => {
  e.preventDefault();

  try {
    if (idEditar) {
  await api.put(`/directores/${idEditar}`, {
    nombre,
    descripcion
  });
} else {
  await api.post("/directores", {
    nombre,
    descripcion
  });
}

    setNombre("");
    setDescripcion("");
    setIdEditar(null);

    obtenerDirectores();
  } catch (error) {
    console.error("Error al crear Director:", error);
  }
};

const eliminarDirector = async (id) => {
  try {
    await api.delete(`/directores/${id}`);
    obtenerDirectores();
  } catch (error) {
    console.error("Error al eliminar Director:", error);
  }
};

const seleccionarDirector = (director) => {
  setNombre(director.nombre);
  setDescripcion(director.descripcion);
  setIdEditar(director._id);
};


  return (
    <div className="container mt-4">

<h2>Crear Director</h2>

<form onSubmit={crearDirector}>

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

      <h2>Lista de Directores</h2>

      <table className="table table-bordered">
        <thead>
         <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
        </tr>
        </thead>

        <tbody>
          {directores.map((g) => (
            <tr key={g._id}>
                <td>{g.nombre}</td>
                <td>{g.descripcion}</td>
               <td>
             <button
                 className="btn btn-warning me-2"
                 onClick={() => seleccionarDirector(g)}
              >
              Editar
             </button>

  <button
    className="btn btn-danger"
    onClick={() => eliminarDirector(g._id)}
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

export default Director;