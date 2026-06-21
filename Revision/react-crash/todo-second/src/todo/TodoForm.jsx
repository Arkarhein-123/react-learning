import { useRef, useState } from "react";

export default function TodoForm({ onAddTodo }) {
    const [inputText, setInputText] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo(inputText);
        setInputText("");
        inputRef.current?.focus();
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={inputRef}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    );
}
