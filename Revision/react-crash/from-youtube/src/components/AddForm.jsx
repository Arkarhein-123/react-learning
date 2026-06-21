import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

export default function AddForm({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-4 flex max-w-md items-center px-4"
    >
      <label htmlFor="addItem" className="sr-only">
        Add Item
      </label>
      <div className="flex w-full items-center overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 dark:border-gray-600">
        <input
          id="addItem"
          type="text"
          placeholder="Enter Todo"
          autoFocus
          required
          ref={inputRef}
          className="w-full bg-transparent px-4 py-3 text-black outline-none placeholder:text-gray-400 dark:text-gray-800 text-lg"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Add Item"
          className="flex h-12 w-14 items-center justify-center bg-blue-600 text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none"
          onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </button>
      </div>
    </form>
  );
}
