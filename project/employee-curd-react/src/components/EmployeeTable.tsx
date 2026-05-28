import { Link } from "react-router-dom";
import type { Employee } from "../ds/Employee";

type EmployeeTypeProps ={
  employees: Employee[];
  onDelete: (id: number) => void;
}


export default function EmployeeList({ employees, onDelete }: EmployeeTypeProps) {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h5>ဝန်ထမ်းစာရင်း</h5>
        </div>
        <table className="table table-striped table-bordered rounded">
          <thead>
            <tr>
              <th>Id</th>
              <th>အရှေ့အမည် (First Name)</th>
              <th>အနောက်အမည် (Last Name)</th>
              <th>အီးမေးလ် (Email)</th>
              <th>လစာ (Salary)</th>
              <th>လုပ်ဆောင်ချက်များ (Actions)</th>

            </tr>
          </thead>
          <tbody>
            {employees && employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.salary}</td>
                  <td>
                    {/* Edit and Delete buttons can be added here */}
                    <Link to={`/employee-form/${employee.id}`} className="btn p-3 btn-warning me-2">Edit</Link>
                    <button className="btn p-3 btn-danger" onClick={() => onDelete(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">ဝန်ထမ်းစာရင်း မရှိသေးပါ။</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}