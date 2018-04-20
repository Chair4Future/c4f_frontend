import axios from "axios";

/**
 * @type {axios.Axios Config}
 */
const configs = {
    baseURL: "http://localhost:3000/",
};

const instance = axios.create(configs);

axios.interceptors.response.use(
    successResponse => successResponse,
    error => {
        if (error.response != null && error.response.status === 401) {
            console.error("Erro 401");
            //falta fazer redirect
            return Promise.reject(error);
        }
        
        return Promise.reject(error);
    }
);

export default instance;
