import axios from "axios";

const authURL = process.env.REACT_APP_AUTH_URL;

const fondflexAPI = axios.create({
    baseURL: authURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default fondflexAPI;