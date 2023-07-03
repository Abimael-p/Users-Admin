import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-crud-users-5871.onrender.com/",
});
