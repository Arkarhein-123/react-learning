import { useForm, type SubmitHandler } from "react-hook-form";
import type { Employee } from "../ds/Employee";
import { useNavigate, useParams } from "react-router-dom";
import { createEmployeeApiCall, findEmployeeByIdApiCall } from "../service/EmployeeService";
import { useEffect } from "react";

export default function EmployeeForm() {
  const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<Employee>();
  const navigator = useNavigate();
  const {id} = useParams();
  
  useEffect(() => {
    const fetchEmployee = async () => {
      if (id) {
        try {
          const response = await findEmployeeByIdApiCall(Number(id));
          reset(response.data); // Populate form with fetched employee data
        } catch (error) {
          console.error("Error fetching employee:", error);
        }
      }
    };

    if (id) {
      fetchEmployee();
    }

  },[id, reset]);

  console.log("EmployeeForm ID :::::::::::::: ", id); // Debugging log for ID

  const onSubmit:SubmitHandler<Employee> = data => {
    createEmployeeApiCall(data)
    .then(res =>{
      console.log("Saved Employee Response:",res);
      reset();
      navigator("/");
    } )
  };
  return (
    <div className="container my-5">
      <h1 className="mb-4">Employee Form</h1>
      <form className="p-5 border border-primary shadow rounded" 
        onSubmit={handleSubmit(onSubmit)}>

          <div>
            <input type="hidden" hidden{...register("id")} />
          </div>

          {/* First Name */}
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              {...register("firstName", {required: "First name is required"})} />
            {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              {...register("lastName", {required: "Last name is required"})} />
            {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              {...register("email", {required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}})} />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          {/* Salary */}
          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input type="number" className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
              {...register("salary", {required: "Salary is required", min: {value: 0, message: "Salary must be a positive number"}})} />
            {errors.salary && <div className="invalid-feedback">{errors.salary.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 py-3" disabled={!isValid}>{id ? "Update Employee" : "Create Employee"}</button> 
          
      </form>
    </div>
  );
}