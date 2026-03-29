import { useEffect, useState } from "react";
import api from "../services/api";

function Tipo() {

  const [tipos, setTipos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [idEditar, setIdEditar] = useState(null);

  useEffect(() => {
    obtenerTipos();
  }, []);

  const obtenerTipos = async () => {
    try {
      const res = await api.get("/tipos");
      setTipos(res.data);
    } catch (error) {
      console.error("Error al obtener tipos:", error);
    }
  };

const crearTipo = async (e) => {
  e.preventDefault();

  try {
    if (idEditar) {
  await api.put(`/tipos/${idEditar}`, {
    nombre,
    descripcion
  });
} else {
  await api.post("/tipos", {
    nombre,
    descripcion
  });
}

    setNombre("");
    setDescripcion("");
    setIdEditar(null);

    obtenerTipos();
  } catch (error) {
    console.error("Error al crear Tipo:", error);
  }
};

const eliminarTipo = async (id) => {
  try {
    await api.delete(`/tipos/${id}`);
    obtenerTipos();
  } catch (error) {
    console.error("Error al eliminar Tipo:", error);
  }
};

const seleccionarTipo = (tipo) => {
  setNombre(tipo.nombre);
  setDescripcion(tipo.descripcion);
  setIdEditar(tipo._id);
};


  return (
    <div className="container mt-4">

<h2>Crear Tipo</h2>

<form onSubmit={crearTipo}>

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

      <h2>Lista de Tipos</h2>

      <table className="table table-bordered">
        <thead>
         <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
        </tr>
        </thead>

        <tbody>
          {tipos.map((g) => (
            <tr key={g._id}>
                <td>{g.nombre}</td>
                <td>{g.descripcion}</td>
               <td>
             <button
                 className="btn btn-warning me-2"
                 onClick={() => seleccionarTipo(g)}
              >
              Editar
             </button>

  <button
    className="btn btn-danger"
    onClick={() => eliminarTipo(g._id)}
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

export default Tipo;