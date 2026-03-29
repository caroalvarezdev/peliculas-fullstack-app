import axios from "axios";

const api = axios.create({
  baseURL: "https://api-peliculas-mpfc.onrender.com"
});

export default api;