import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { increment, decrement, increaseByAmount, reset } from "../features/counter/counterSlice";

export default function CounterComponent() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    const [amount, setAmount] = useState<number>(0);

    return (
        <div>
            <h1>Counter Studio</h1>

            {/* Displaying the current value */}
            <div>Count: {count}</div>

            {/* Standard Operation Buttons */}
            <div>
                <button onClick={() => dispatch(increment())}>+ Increment</button>

                <button onClick={() => dispatch(decrement())}>- Decrement</button>

                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>

            {/* Custom Dynamic Payload Form Controls */}
            <div>
                <label>Custom Amount Action:</label>
                <div>
                    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                    <button onClick={() => dispatch(increaseByAmount(amount))}>Add Custom Amount</button>
                </div>
            </div>
        </div>
    );
}
