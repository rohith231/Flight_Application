import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:40000",
  timeout: 10000,
  params: {}, // do not remove this, its added to add params later in the config
});
axios.defaults.headers = { "Content-Type": "application/json" }
export default instance;