import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://labelling-tool-backend.herokuapp.com",
});

export default axiosInstance;
