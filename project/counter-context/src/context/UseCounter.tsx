import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function UseCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
