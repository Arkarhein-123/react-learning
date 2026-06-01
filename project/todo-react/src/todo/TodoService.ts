import axios from "axios";
import { getToken } from "../auth/LoginService";
import type { Todo } from "./Todo";

axios.interceptors.request.use(
    function (config) {
        const token = getToken();
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

const TODO_BACKEN_URL = "http://localhost:8080/api/todos";

export const todoApiCall = () => axios.get<Todo[]>(`${TODO_BACKEN_URL}`);