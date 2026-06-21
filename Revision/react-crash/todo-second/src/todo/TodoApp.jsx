import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos",
                );
                if (!response.ok) throw Error("Data can't be fetched...");
                const data = await response.json();
                console.log(data);
                setTodos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        setTimeout(() => fetchData(), 2000);
    }, []);

    const handleAddTodo = (title) => {
        const userId = todos.length + 1;
        const id = Date.now();
        const newTodo = { userId, id, title, completed: false };
        setTodos((prev) => [...prev, newTodo]);
    };

    const handleToggleComplete = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };

    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo Lists</h1>

            {loading && <h3>Loading...</h3>}
            {error && <h2>{error}</h2>}

            {!loading && !error && (
                <div>
                    <TodoForm onAddTodo={handleAddTodo} />
                    <TodoList
                        todos={todos}
                        onToggle={handleToggleComplete}
                        onDelete={handleDelete}
                    />
                </div>
            )}
        </div>
    );
}
