import type { Todo } from "./Todo";

interface TodoTableProps {
  todos: Todo[];
}

export default function TodoTable({ todos }: TodoTableProps) {
  return (
    <>
      <table className="table table-striped table-hover border border-success rounded">
        <thead className="table-success">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Assigned Date</th>
            <th>Due Date</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-muted py-3">
                No todos found.
              </td>
            </tr>
          ) : (
            todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                {/* Convert JSON string dates into real JavaScript Date objects */}
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
                    className={`badge ${todo.isCompleted ? "bg-success" : "bg-primary text-dark"}`}
                  >
                    {todo.isCompleted ? "Yes" : "No"}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
