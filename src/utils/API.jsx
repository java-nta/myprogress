import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json"
  },
});

API.interceptors.request.use(
  function (config) {
    const token = Cookies.get('token');
    if (token) config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  function (error) {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

export default API;
