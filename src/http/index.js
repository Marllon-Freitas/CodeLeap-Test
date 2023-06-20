import axios from "axios";

const http = axios.create({
  baseURL: "https://dev.codeleap.co.uk/",
  headers: {
    "Content-type": "application/json"
  }
});

export default http;