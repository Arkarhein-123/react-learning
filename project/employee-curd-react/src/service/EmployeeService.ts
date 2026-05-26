import axios from "axios";
import type { Employee } from "../ds/Employee";


const EMPLOYEE_BACKEND_URL = 'http://localhost:8080/api/employees';

export const fetchAllEmployeesApiCall = () => axios.get<Employee[]>(EMPLOYEE_BACKEND_URL);
