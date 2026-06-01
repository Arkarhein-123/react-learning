import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginDto } from "./Login";
import { useNavigate } from "react-router-dom";

import { loginApiCall, setToken, setLoginUsername } from "./LoginService";

export default function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>();
  const navigator = useNavigate();

  const onSubmit: SubmitHandler<LoginDto> = (data) => {
    loginApiCall(data)
      .then((response) => {
        console.log(response);
        const token = "Basic " + btoa(data.username + ":" + data.password);
        setToken(token);

        // CRITICAL FIX: Save username so Header knows you are logged in!
        setLoginUsername(data.username);

        navigator("/");

        // CRITICAL FIX: Refresh browser instance so Header updates its state
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="container mt-5 w-50 border border-primary rounded p-5">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            {" "}
            {/* Added mb-3 for better Bootstrap spacing */}
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <span className="text-danger d-block mt-1">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="form-group mb-3">
            {" "}
            {/* Added mb-3 for better Bootstrap spacing */}
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-danger d-block mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
