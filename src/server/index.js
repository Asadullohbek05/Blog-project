import axios from "axios";

const request = axios.create({
  baseURL: "https://reqres.in/",
  timeout: 10000,
});

export default request;
