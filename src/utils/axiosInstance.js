import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
  headers: {
    Authorization: import.meta.env.VITE_IMAGE_API_KEY,
  },
});

export default axiosInstance;
