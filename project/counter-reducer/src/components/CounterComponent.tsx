import React, { useReducer } from "react";
import CounterReducer, { initialState } from "../reducer/CounterReducer";

export default function CounterComponent() {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  return (
    <div>
      <h1 className="mt-4">Count : {state.count}</h1>
      <button
        className="btn btn-primary mx-3 mt-2 px-4 py-2"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="btn btn-primary mx-3 mt-2 px-4 py-2"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
      <button
        className="btn btn-primary mx-3 mt-2 px-4 py-2"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
}
