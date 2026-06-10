import { useState } from "react";
import { CounterContext } from "./CounterContext";

export default function CounterContextProvider({ children} : {children : React.ReactNode }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  const value = {
    count,
    increase,
    decrease,
    reset,
  };

  return (
    <div>
      <CounterContext.Provider value={value}>
        {children}
      </CounterContext.Provider>
    </div>
  );
}
