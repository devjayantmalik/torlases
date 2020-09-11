import axios from "axios";

export default axios.create({
  baseURL: "http://0.0.0.0:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
