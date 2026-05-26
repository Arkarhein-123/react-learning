import type { Employee } from "../ds/Employee";


type EmployeeTypeProps ={
  employees: Employee[];
}


export default function EmployeeList({ employees }: EmployeeTypeProps) {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h5>ဝန်ထမ်းစာရင်း</h5>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>အရှေ့အမည် (First Name)</th>
              <th>အနောက်အမည် (Last Name)</th>
              <th>အီးမေးလ် (Email)</th>
              <th>လစာ (Salary)</th>
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