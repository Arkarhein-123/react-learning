import LoginComponent from "./auth/LoginComponent";
import { isLoggedIn } from "./auth/LoginService";
import RegisterComponent from "./auth/RegisterComponent";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// 1. Properly typed and structured Guard Component
interface AuthGuardProps {
  children: React.ReactNode;
}

function AuthGuard({ children }: AuthGuardProps) {
  const beLogin = isLoggedIn();

  // Best Practice: Use <Navigate /> to handle routing redirection cleanly
  return beLogin ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* 2. Used AuthGuard as a proper JSX element wrapper */}
          <Route
            path="/"
            element={
              <AuthGuard>
                <Home />
              </AuthGuard>
            }
          />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
