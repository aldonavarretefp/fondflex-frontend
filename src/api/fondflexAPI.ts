import axios from "axios";
import Cookies from "universal-cookie";

const fondflexAPI = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

// TODO: Add a request interceptor to add the token to the request from the cookies
fondflexAPI.interceptors.request.use(
    (config) => {
        const cookies = new Cookies();
        const token = cookies.get("accessToken");
        if (token) {
            config.headers["accessToken"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default fondflexAPI;