// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import UseCounter from "../context/UseCounter";

export default function CounterComponent() {
  const { count, increase, decrease, reset } = UseCounter();
  return (
    <div>
      <h1>{`Counter : ${count}`}</h1>
      <button className="btn btn-primary px-5 py-3 mx-3" onClick={decrease}>
        Decrease
      </button>

      <button className="btn btn-primary px-5 py-3 mx-3" onClick={reset}>
        Reset
      </button>

      <button className="btn btn-primary px-5 py-3 mx-3" onClick={increase}>
        Increase
      </button>
    </div>
  );
}
