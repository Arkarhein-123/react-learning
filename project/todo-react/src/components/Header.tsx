import { Link, useNavigate } from "react-router-dom";
import { getLoggedInUsername, isLoggedIn, logout } from "../auth/LoginService";

export default function Header() {
  const beLogin = isLoggedIn();
  const username = getLoggedInUsername();
  const navigator = useNavigate();

  const logoutHandler = () => {
    logout();
    navigator("/login");
    window.location.reload(); // Restarts the application instance to refresh states
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-success">
        <div className="container-fluid px-4">
          <Link to="/" className="navbar-brand fw-bold">
            Todo
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-target="#myNav"
            data-bs-toggle="collapse"
            aria-controls="myNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="myNav">
            <ul className="ms-auto navbar-nav">
              {/* Show Login and Register ONLY if NOT logged in */}
              {!beLogin && (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                </>
              )}

              {/* Show Username and Logout ONLY if logged in */}
              {beLogin && (
                <>
                  <li className="nav-item">
                    <span className="nav-link text-capitalize text-white fw-semibold me-2">
                      Hello! {username}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={logoutHandler}
                      className="btn btn-link nav-link border-0 text-white-50"
                      style={{ textDecoration: "none" }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
