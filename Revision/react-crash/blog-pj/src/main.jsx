import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import AxiosTesting from "./testing/AxiosTesting.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        {/* <AxiosTesting /> */}
    </StrictMode>,
);
