export default function EmployeeForm() {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h4 className="mb-4">Add New Employee</h4>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="col-12">
            <label htmlFor="salary" className="form-label">Salary</label>
            <input type="number" className="form-control" id="salary" placeholder="0.00" />
          </div>
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary w-100">Create Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
}