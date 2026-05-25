import { useState } from "react"

export default function CounterComponent() {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter -1);
    const reset = () => setCounter(0);
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
