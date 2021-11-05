import axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json",
  },
});
