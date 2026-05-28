import axios from "axios";
import type { Employee } from "../ds/Employee";


const EMPLOYEE_BACKEND_URL = 'http://localhost:8080/api/employees';

export const fetchAllEmployeesApiCall = () => axios.get<Employee[]>(EMPLOYEE_BACKEND_URL);

export const createEmployeeApiCall = (employee: Employee) => axios.post<Employee>(EMPLOYEE_BACKEND_URL, employee);

export const findEmployeeByIdApiCall = (id: number) => axios.get<Employee>(`${EMPLOYEE_BACKEND_URL}/${id}`);

export const deleteEmployeeByIdApiCall = (id: number) => axios.delete(`${EMPLOYEE_BACKEND_URL}/${id}`);