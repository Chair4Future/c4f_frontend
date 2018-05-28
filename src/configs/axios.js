import axios from "axios";
import StoredUser from './../stores/user';
/**
 * @type {axios.Axios Config}
 */
const configs = {
    baseURL: "http://192.168.1.34:3000/",
    headers: {
        common: {
            'Accept': 'application/json',
            'Accept-Version': '1.0.0'
        }
    }
};

export const client = axios.create(configs);

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

export default client;
