import { useForm } from "react-hook-form";
import { createTodo } from "../todo/TodoService"; // Adjust this path to your TodoService file
import type { TodoRequest } from "./TodoRequest";
// Adjust this path to your Todo type file

interface AddTodoProps {
  onTodoAdded: () => void; // Callback function to refresh the table in Home.tsx
}

export default function AddTodo({ onTodoAdded }: AddTodoProps) {
  // Initialize React Hook Form with TodoRequest types
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TodoRequest>({
    defaultValues: {
      title: "",
      description: "",
      dueDays: 1,
    },
  });

  // Form submit handler
  const onSubmit = async (data: TodoRequest) => {
    try {
      // HTML input type="number" still returns a string to JS, so we convert it to an actual number
      data.dueDays = Number(data.dueDays);

      // Send data to backend using Axios service
      await createTodo(data);

      // Clear form inputs after successful creation
      reset();

      // Trigger the parent component to refresh the Todo list table automatically
      onTodoAdded();
    } catch (e) {
      console.error("Failed to add new todo task:", e);
    }
  };

  return (
    <div className="card p-4 border rounded shadow-sm mb-5">
      <h3 className="mb-4 text-primary">Create a New Task</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title Input Field */}
        <div className="mb-3">
          <label className="form-label fw-bold">Task Title</label>
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            placeholder="Enter what needs to be done..."
            {...register("title", {
              required: "Task title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters long",
              },
            })}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>

        {/* Description Input Field */}
        <div className="mb-3">
          <label className="form-label fw-bold">Description</label>
          <textarea
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            rows={3}
            placeholder="Provide details about this task..."
            {...register("description", {
              required: "Task description is required",
            })}
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description.message}</div>
          )}
        </div>

        {/* Due Days Input Field */}
        <div className="mb-4">
          <label className="form-label fw-bold">
            Due Days (Days allowed to finish)
          </label>
          <input
            type="number"
            className={`form-control ${errors.dueDays ? "is-invalid" : ""}`}
            {...register("dueDays", {
              required: "Please specify number of days allowed",
              min: {
                value: 1,
                message: "Must be given at least 1 day to finish",
              },
            })}
          />
          {errors.dueDays && (
            <div className="invalid-feedback">{errors.dueDays.message}</div>
          )}
        </div>

        {/* Submit Action Button */}
        <button
          type="submit"
          className="btn btn-primary btn-lg w-100 shadow-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Saving Task...
            </>
          ) : (
            "Add New Todo"
          )}
        </button>
      </form>
    </div>
  );
}
