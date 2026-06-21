export default function TodoList({ todos, onToggle, onDelete }) {
    if (todos.length === 0) {
        return (
            <h2 className="text-gray-400 text-center text-sm py-4 font-medium">
                🎉 No Tasks Remaining!
            </h2>
        );
    }

    return (
        <ul className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                >
                    {/* Left Side: Checkbox and Title text */}
                    <div className="flex items-center gap-3 flex-1 min-w-0 mr-4">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer accent-blue-600 transition-all"
                        />
                        <span
                            className={`truncate text-sm font-semibold transition-all duration-200 ${
                                todo.completed
                                    ? "line-through text-gray-400 font-normal"
                                    : "text-gray-700"
                            }`}
                        >
                            {todo.title}
                        </span>
                    </div>

                    {/* Right Side: FIXED Button position and noticeable hover colors */}
                    <button
                        onClick={() => onDelete(todo.id)}
                        className="text-red-600 hover:text-gray-800 p-2 rounded-xl hover:bg-red-50 active:scale-95 transition-all duration-200 flex-shrink-0 cursor-pointer"
                        aria-label="Delete task"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-16v1a3 3 0 003 3h10M4 7h16"
                            />
                        </svg>
                    </button>
                </li>
            ))}
        </ul>
    );
}
