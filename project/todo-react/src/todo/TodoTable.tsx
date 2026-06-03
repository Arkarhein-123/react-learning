import type { Todo } from "./Todo";
import {
  changeTodoCompleted,
  changeTodoUncompleted,
  deleteTodo,
} from "./TodoService"; // 1. Import both functions

interface TodoTableProps {
  todos: Todo[];
  onTodoUpdate: () => void;
}

// 2. CRITICAL FIX: Destructure onTodoUpdate here!
export default function TodoTable({ todos, onTodoUpdate }: TodoTableProps) {
  const todoCompletedHandler = async (id: number) => {
    try {
      await changeTodoCompleted(id);
      onTodoUpdate(); // Now this will work!
    } catch (e) {
      console.log(e);
    }
  };

  // 3. Add handler for Uncompleted status
  const todoUncompletedHandler = async (id: number) => {
    try {
      await changeTodoUncompleted(id);
      onTodoUpdate();
    } catch (e) {
      console.log(e);
    }
  };

  const todoDeleteHandler = async (id: number) => {
    try {
      await deleteTodo(id);
      onTodoUpdate();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <table className="table table-striped table-hover border p-3 rounded">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Assigned Date</th>
            <th>Due Date</th>
            <th>Completed</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center text-muted py-3">
                {" "}
                {/* Changed to colSpan 6 */}
                No todos found.
              </td>
            </tr>
          ) : (
            todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  {todo.assignedDate
                    ? new Date(todo.assignedDate).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>
                  {todo.dueDate
                    ? new Date(todo.dueDate).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>
                  <span
                    className={`badge ${todo.isCompleted ? "bg-success" : "bg-warning text-dark "} text-uppercase fw-bold px-3 py-3`}
                  >
                    {todo.isCompleted ? "Completed" : "Uncompleted"}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => todoCompletedHandler(todo.id)}
                    className="btn btn-outline-success me-3" // Reduced margin for cleaner layout
                  >
                    Completed
                  </button>
                  {/* 4. Connected the Uncompleted action button here */}
                  <button
                    onClick={() => todoUncompletedHandler(todo.id)}
                    className="btn btn-outline-secondary me-3"
                  >
                    Uncompleted
                  </button>
                  <button
                    onClick={() => todoDeleteHandler(todo.id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
