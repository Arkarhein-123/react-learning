import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";

import FooterComponent from "./component/FooterComponent";
import type { ReactNode } from "react";

import { isLoggedIn } from "./auth/service/AuthService.ts";
import LoginComponent from "./auth/component/LoginComponent.tsx";
import HomeComponent from "./student/component/HomeComponent.tsx";
import TeacherDashboard from "./teacher/TeacherDashboard.tsx";
import CourseCreateComponent from "./teacher/component/CourseCreateComponent.tsx";
import TeacherDashboardHome from "./teacher/component/TeacherDashboardHome.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegisterComponent from "./auth/component/RegisterComponent.tsx";

function AuthGuard({ children }: { children: ReactNode }) {
  const loggedIn = isLoggedIn();
  // console.log("Be Logged in : " + loggedIn);

  if (!loggedIn) return <LoginComponent />;
  return <>{children}</>;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  // const beTeacher = getRoleName() === "ROLE_TEACHER";
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <HeaderComponent />
        <Routes>
          <Route
            path="/"
            element={
              <AuthGuard>
                <HomeComponent />
              </AuthGuard>
            }
          />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route
            path="/teacher"
            element={
              <AuthGuard>
                <TeacherDashboard />
              </AuthGuard>
            }
          >
            <Route path="" element={<TeacherDashboardHome />} />
            <Route path="create-course" element={<CourseCreateComponent />} />
          </Route>
        </Routes>
        <FooterComponent />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
