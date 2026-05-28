import { useEffect, useState } from "react";
import type { Employee } from "../ds/Employee";
import { fetchAllEmployeesApiCall } from "../service/EmployeeService";

export default function useEmployee() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchAllEmployeesApiCall()
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  // Return the state directly, not JSX
  return { employees, setEmployees };
}