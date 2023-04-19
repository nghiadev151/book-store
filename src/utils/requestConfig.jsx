import axios from "axios";

export const baseURL = "localhost:8080/api/";

export const publicRequest = axios.create({
    baseURL: baseURL,
});
