import { Link } from "react-router-dom";
import useEmployee from "../hook/EmployeeHook";
import EmployeeTable from "./EmployeeTable";
import { deleteEmployeeByIdApiCall } from "../service/EmployeeService";

export default function Home() { 
  const { employees ,setEmployees} = useEmployee();

  console.log(employees,setEmployees); // Debugging log for employees and setEmployees

  const handleDelete = async (id: number) => {
    // Call the delete API
    try{
      await deleteEmployeeByIdApiCall(id);
      // Update the local state to remove the deleted employee
      setEmployees(employees.filter(employee => employee.id !== id));
    }catch(error){
      console.error("Error deleting employee:", error);
    }
  }

  return (
    <>
      <Link to="/create-employee" className="btn btn-primary m-3">Create Employee</Link>
      <EmployeeTable employees={employees} onDelete={handleDelete} />
    </>
  );
}