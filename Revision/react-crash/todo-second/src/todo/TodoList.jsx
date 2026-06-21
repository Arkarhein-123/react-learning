export default function TodoList({ todos, onToggle, onDelete }) {
    {
      todos.length === 0 && <h2>No Todos</h2>;
    }
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                        />
                        <span
                            className={`${todo.completed ? "line-through" : ""}`}
                        >
                            {todo.title}
                        </span>
                        <button onClick={() => onDelete(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
