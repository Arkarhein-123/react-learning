import { useForm, type SubmitHandler } from "react-hook-form"
import type { PersonInfo } from "../model/PersonInfo"


export default function HookForm1() {
    const { register, handleSubmit } = useForm<PersonInfo>();


    const onSubmit:SubmitHandler<PersonInfo> = (data) => {
        console.log("Submited Data : ",data);
    }

  return (
    <div>
      <div className="container my-5">
        <form action="" onSubmit={handleSubmit(onSubmit)}
         className="p-5 border border-success shadow rounded">

          <div className="mb-3">
            <label htmlFor="" className="form-label">Name</label>
            <input type="text" placeholder="Enter Your Name" 
            className="form-control" {...register("name")} />   
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input type="text" placeholder="Enter Your Email" 
            className="form-control" {...register("email")} />   
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Phone Number</label>
            <input type="text" placeholder="Enter Your Phone Number" 
            className="form-control" {...register("phoneNumber")} />   
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
         </form>
      </div>
    </div>
  )
}
