import axios from "axios";

export const url = "http://127.0.0.1:8000/api";

export const fetchData = () =>
  axios.post(`${url}/get-all-data`, {
    token: "f240ad10-2d42-4d20-b361-4f4dc419b360",
  });