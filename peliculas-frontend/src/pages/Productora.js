import { useEffect, useState } from "react";
import api from "../services/api";

function Productora() {

  const [productoras, setProductoras] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [idEditar, setIdEditar] = useState(null);

  useEffect(() => {
    obtenerProductoras();
  }, []);

  const obtenerProductoras = async () => {
    try {
      const res = await api.get("/api/productoras");
      setProductoras(res.data);
    } catch (error) {
      console.error("Error al obtener productoras:", error);
    }
  };

const crearProductora = async (e) => {
  e.preventDefault();

  try {
    if (idEditar) {
  await api.put(`/productoras/${idEditar}`, {
    nombre,
    descripcion
  });
} else {
  await api.post("/productoras", {
    nombre,
    descripcion
  });
}

    setNombre("");
    setDescripcion("");
    setIdEditar(null);

    obtenerProductoras();
  } catch (error) {
    console.error("Error al crear Productora:", error);
  }
};

const eliminarProductora = async (id) => {
  try {
    await api.delete(`/productoras/${id}`);
    obtenerProductoras();
  } catch (error) {
    console.error("Error al eliminar Productora:", error);
  }
};

const seleccionarProductora = (productora) => {
  setNombre(productora.nombre);
  setDescripcion(productora.descripcion);
  setIdEditar(productora._id);
};


  return (
    <div className="container mt-4">

<h2>Crear Productora</h2>

<form onSubmit={crearProductora}>

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

      <h2>Lista de Productoras</h2>

      <table className="table table-bordered">
        <thead>
         <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
        </tr>
        </thead>

        <tbody>
          {productoras.map((g) => (
            <tr key={g._id}>
                <td>{g.nombre}</td>
                <td>{g.descripcion}</td>
               <td>
             <button
                 className="btn btn-warning me-2"
                 onClick={() => seleccionarProductora(g)}
              >
              Editar
             </button>

  <button
    className="btn btn-danger"
    onClick={() => eliminarProductora(g._id)}
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

export default Productora;