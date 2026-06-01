import useTodos from "../hook/ListAllTodoHook";
import TodoTable from "../todo/TodoTable";

export default function Home() {
  const { todos } = useTodos();

  return (
    <div>
      <div className="container mt-5">
        <h2 className="mb-4">My Todo List</h2>
        <TodoTable todos={todos} />
      </div>
    </div>
  );
}
