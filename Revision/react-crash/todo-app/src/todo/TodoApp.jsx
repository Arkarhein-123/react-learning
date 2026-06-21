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
                setLoading(true);
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos",
                );
                if (!response.ok) throw Error("Data can't be fetched...");
                const data = await response.json();
                setTodos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleAddTodo = (title) => {
        const newTodo = { id: Date.now(), title, completed: false };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const handleToggleComplete = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            );
        });
    };

    const handleDeleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                    Task Manager
                </h1>

                <TodoForm onAddTodo={handleAddTodo} />

                {loading && (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-xl text-center">
                        ⚠️ Error: {error}
                    </div>
                )}

                {!loading && !error && (
                    <TodoList
                        todos={todos}
                        onToggle={handleToggleComplete}
                        onDelete={handleDeleteTodo}
                    />
                )}
            </div>
        </div>
    );
}
