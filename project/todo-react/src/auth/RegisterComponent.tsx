import { useForm, type SubmitHandler } from "react-hook-form";

import { registerApiCall } from "./LoginService";
import type { Register } from "./Register";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent() {
  const { register, handleSubmit } = useForm<Register>();
  const navigator = useNavigate();

  const onSubmit: SubmitHandler<Register> = (data) => {
    registerApiCall(data)
      .then((response) => {
        console.log(response.data);
        navigator("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              {...register("username")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              {...register("email")}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 px-2 py-3 fs-5">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
