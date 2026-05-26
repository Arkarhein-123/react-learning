import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Home from "./components/Home";     
import EmployeeForm from "./components/EmployeeForm";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-employee" element={<EmployeeForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}