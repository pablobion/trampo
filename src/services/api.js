import Axios from "axios";

const api = Axios.create({
  baseURL: 'teste.com',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;