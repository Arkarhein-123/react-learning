// import { createContext, useState } from "react";
// import { useState } from "react";
import CounterComponent from "./components/CounterComponent";
import ParentComponent from "./components/ParentComponent";
// import { CounterContext } from "./context/CounterContext";
import CounterContextProvider from "./context/CounterContextProvider";

export default function App() {
  return (
    <div>
      <CounterContextProvider>
        <ParentComponent name="Amazing 3D Counter Game App" children={<CounterComponent />} />
      </CounterContextProvider>
    </div>
  );
}
