import axios from "axios";

console.log("INSTANCE_URL:", process.env.INSTANCE_URL);

const instance = axios.create({
  //   baseURL: process.env.INSTANCE_URL,
  baseURL: "http://localhost:9001/",
  headers: {
    "content-type": "application/json",
  },
});

export default instance;
