import { useReducer } from "react";
import CountReducer from "../reduce/CountReducer";

export default function Count() {
  const [state, dispatch] = useReducer(CountReducer, { count: 0 });
  return (
    <div>
      <h1>Couunt : {state.count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
    </div>
  );
}
