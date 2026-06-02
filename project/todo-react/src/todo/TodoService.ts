import axios from "axios";
import { getToken } from "../auth/LoginService";
import type { Todo } from "./Todo";
import type { TodoRequest } from "./TodoRequest";

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



export const changeTodoCompleted = (id: number) =>
    axios.put(`${TODO_BACKEN_URL}/completed/${id}`);

export const changeTodoUncompleted = (id: number) =>
    axios.put(`${TODO_BACKEN_URL}/uncompleted/${id}`);

export const deleteTodo = (id: number) =>
    axios.delete(`${TODO_BACKEN_URL}/${id}`);


export const createTodo = (todoData: TodoRequest) =>
    axios.post<Todo>(`${TODO_BACKEN_URL}`, todoData);
