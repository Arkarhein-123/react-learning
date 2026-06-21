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
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                ref={inputRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="What Needs to Be Done!"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl active:scale-95 transform transition-all"
            >
                Add
            </button>
        </form>
    );
}
