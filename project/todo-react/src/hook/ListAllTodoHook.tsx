import { useEffect, useState } from "react";
import type { Todo } from "../todo/Todo";
import { todoApiCall } from "../todo/TodoService";

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    todoApiCall()
      .then((response) => {
        setTodos(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return { todos, setTodos };
}
