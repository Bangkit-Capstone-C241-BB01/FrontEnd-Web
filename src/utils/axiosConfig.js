import axios from "axios";
import { getTokenCustomer, getTokenSeller, getTokenAdmin } from "./cookies";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  let token;

  switch (config.role) {
    case "customer":
      token = getTokenCustomer();
      break;
    case "seller":
      token = getTokenSeller();
      break;
    case "admin":
      token = getTokenAdmin();
      break;
    default:
      throw new Error("Invalid role");
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
