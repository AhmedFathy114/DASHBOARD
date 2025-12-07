import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8100/api",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en"
  }
});
export default api;
