import { useEffect, useState } from "react";
import api from "../services/api";

function Media() {

  const [trailer, setTrailer] = useState("");
  const [imagen, setImagen] = useState("");

  const [titulo, setTitulo] = useState("");
  const [sinopsis, setSinopsis] = useState("");

  const [generos, setGeneros] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [medias, setMedias] = useState([]);

  const [generoSeleccionado, setGeneroSeleccionado] = useState("");
  const [directorSeleccionado, setDirectorSeleccionado] = useState("");
  const [productoraSeleccionada, setProductoraSeleccionada] = useState("");
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const resGeneros = await api.get("/generos");
      const resDirectores = await api.get("/directores");
      const resProductoras = await api.get("/productoras");
      const resTipos = await api.get("/tipos");
      const resMedias = await api.get("/medias");

      setGeneros(resGeneros.data);
      setDirectores(resDirectores.data);
      setProductoras(resProductoras.data);
      setTipos(resTipos.data);
      setMedias(resMedias.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const crearMedia = async (e) => {
    e.preventDefault();

    try {
      await api.post("/medias", {
        titulo,
        sinopsis,
        genero: generoSeleccionado,
        director: directorSeleccionado,
        productora: productoraSeleccionada,
        tipo: tipoSeleccionado,
        trailer,
        imagen,
      });

      // limpiar formulario
      setTitulo("");
      setSinopsis("");
      setGeneroSeleccionado("");
      setDirectorSeleccionado("");
      setProductoraSeleccionada("");
      setTipoSeleccionado("");

      alert("Media creada correctamente");

      // refrescar lista
      obtenerDatos();
    } catch (error) {
      console.error("Error al crear media:", error);
    }
  };

  return (
    <form className="container mt-4" onSubmit={crearMedia}>
      <h2>Crear Media</h2>

      <input
        className="form-control mb-2"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Sinopsis"
        value={sinopsis}
        onChange={(e) => setSinopsis(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="URL del trailer"
        value={trailer}
        onChange={(e) => setTrailer(e.target.value)}
      />

      <input
       className="form-control mb-2"
       placeholder="URL de la imagen"
       value={imagen}
       onChange={(e) => setImagen(e.target.value)}
      />

      {/* SELECT GÉNERO */}
      <select
        className="form-control mb-2"
        value={generoSeleccionado}
        onChange={(e) => setGeneroSeleccionado(e.target.value)}
      >
        <option value="">Seleccione un género</option>
        {generos.map((g) => (
          <option key={g._id} value={g._id}>
            {g.nombre}
          </option>
        ))}
      </select>

      {/* SELECT DIRECTOR */}
      <select
        className="form-control mb-2"
        value={directorSeleccionado}
        onChange={(e) => setDirectorSeleccionado(e.target.value)}
      >
        <option value="">Seleccione un director</option>
        {directores.map((d) => (
          <option key={d._id} value={d._id}>
            {d.nombre}
          </option>
        ))}
      </select>

      {/* SELECT PRODUCTORA */}
      <select
        className="form-control mb-2"
        value={productoraSeleccionada}
        onChange={(e) => setProductoraSeleccionada(e.target.value)}
      >
        <option value="">Seleccione una productora</option>
        {productoras.map((p) => (
          <option key={p._id} value={p._id}>
            {p.nombre}
          </option>
        ))}
      </select>

      {/* SELECT TIPO */}
      <select
        className="form-control mb-2"
        value={tipoSeleccionado}
        onChange={(e) => setTipoSeleccionado(e.target.value)}
      >
        <option value="">Seleccione un tipo</option>
        {tipos.map((t) => (
          <option key={t._id} value={t._id}>
            {t.nombre}
          </option>
        ))}
      </select>

      <button type="submit" className="btn btn-success mt-2">
        Guardar Media
      </button>

      <hr />

      <h2>Lista de Medias</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Título</th>
            <th>Género</th>
            <th>Director</th>
            <th>Productora</th>
            <th>Tipo</th>
            <th>Trailer</th>
            <th>Imagen</th>
          </tr>
        </thead>

        <tbody>
          {medias.map((m) => (
            <tr key={m._id}>
              <td>{m.titulo}</td>
              <td>{m.genero?.nombre}</td>
              <td>{m.director?.nombre}</td>
              <td>{m.productora?.nombre}</td>
              <td>{m.tipo?.nombre}</td>

              <td>
                {m.trailer ? (
                  <a href={m.trailer} target="_blank" rel="noreferrer">
                    Ver trailer
                  </a>
                ) : (
                  "No disponible"
                )}
              </td>

              <td>
                {m.imagen ? (
                  <img src={m.imagen} alt="poster" width="100" />
                ) : (
                  "Sin imagen"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}

export default Media;