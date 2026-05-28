import { useForm, type SubmitHandler } from "react-hook-form"
import type { PersonInfo } from "../model/PersonInfo";

export default function HookForm2() {
    const {register, handleSubmit, formState:{errors}} =useForm<PersonInfo>();
    const onSubmit:SubmitHandler<PersonInfo> = (data) => {
        console.log("Submited Data : ",data);
    }

  return (
    <div>
        <div className="container my-5">
            <form onSubmit={handleSubmit(onSubmit)} className="p-5 border border-info shadow rounded">

                <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" placeholder="Enter Your Name"
                        {...register("name", { 
                            required: "Name is Required",
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters"
                            },
                            validate: (value) => {
                                return value.toLowerCase() !== "admin" || "Username 'admin' is not allowed";
                            }
                        })} 
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    />  
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" 
                        placeholder="Enter Your Email"
                        {...register("email",{
                            required:"Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            }
                        })}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
              
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Phone Number</label>
                    <input type="text" 
                        placeholder="Enter Your Phone Number"
                        {...register("phoneNumber",{
                            required:"Phone Number is required",
                            pattern: {
                                value: /^\d{11}$/,
                                message: "Invalid phone number"
                            }
                        })}
                        className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
                    />
                    {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber.message}</div>}
                </div>

                <button type="submit" className="btn btn-warning">Submit</button>

            </form>
        </div>
    </div>
  )
}
