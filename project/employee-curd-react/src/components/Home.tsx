import { Link } from "react-router-dom";
import useEmployee from "../hook/EmployeeHook";
import EmployeeTable from "./EmployeeTable";

export default function Home() { 
  const { employees } = useEmployee();

  console.log(employees);
  return (
    <>
      <Link to="/create-employee" className="btn btn-primary m-3">Create Employee</Link>
      <EmployeeTable employees={employees} />
    </>
  );
}