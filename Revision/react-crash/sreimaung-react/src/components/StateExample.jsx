import { useState } from "react";

export default function StateExample() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="container mt-5 p-4">
                <label class
                    Name="form-label">{count}</label>
                <button
                    onClick={() => setCount(count + 1)}
                    className="btn btn-primary px-3 py-2 me-5"
                >
                    Increase
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="btn btn-primary px-3 py-2 me-5"
                >
                    Reset
                </button>
                <button onClick={() => setCount(0)} className="btn btn-primary px-3 py-2 me-5">
                    Decrease
                </button>
            </div>
        </div>
    );
}
