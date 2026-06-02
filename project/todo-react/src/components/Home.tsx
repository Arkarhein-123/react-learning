import { useState, useEffect } from "react";
import { todoApiCall } from "../todo/TodoService";
import type { Todo } from "../todo/Todo";
import TodoTable from "../todo/TodoTable";
import AddTodo from "../todo/AddTodo"; // 1. Import your newly created AddTodo form component

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false); // 2. State to toggle form visibility

  // Function to refresh the list of todos
  const refreshList = () => {
    todoApiCall()
      .then((res) => setTodos(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await todoApiCall();
        setTodos(response.data);
      } catch (e) {
        console.error("Error fetching todos:", e);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h2 className="mb-4">My Todo List</h2>

        {/* 3. Add toggle click handler and dynamically change the button color/text */}
        <button
          onClick={() => setShowForm(!showForm)}
          className={`btn ${showForm ? "btn-secondary" : "btn-primary"} mb-4`}
        >
          {showForm ? "Close Form" : "Add Todo"}
        </button>

        {/* 4. Conditionally render the AddTodo form based on the state */}
        {showForm && (
          <AddTodo
            onTodoAdded={() => {
              refreshList(); // Refresh the list view table
              setShowForm(false); // Auto-close the form container after successfully saving
            }}
          />
        )}

        <TodoTable
          todos={todos}
          onTodoUpdate={refreshList} // 5. Cleaned up the repetitive inline code using our refreshList function
        />
      </div>
    </div>
  );
}
