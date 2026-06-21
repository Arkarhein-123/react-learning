import { MdDelete } from "react-icons/md";

export default function ListItems({ item, handleCheck, handleDelete }) {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 hover:bg-fuchsia-50/40 rounded-lg transition-all duration-200 group">
      {/* Left Side: Checkbox and Text */}
      <div className="flex items-center space-x-4 flex-1">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleCheck(item.id)}
          className="w-5 h-5 text-fuchsia-600 border-gray-300 rounded cursor-pointer focus:ring-fuchsia-500 accent-fuchsia-600"
        />
        <span
          onClick={(e) => {
            if (e.detail === 2) handleCheck(item.id);
          }}
          className={`text-base font-medium font-sans cursor-pointer select-none transition-all duration-200 flex-1 ${
            item.checked ? "line-through text-gray-400 italic" : "text-gray-700"
          }`}
        >
          {item.item}
        </span>
      </div>

      {/* Right Side: Delete Button */}
      <button
        onClick={() => handleDelete(item.id)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-200"
      >
        <MdDelete size={18} />
        <span className="hidden sm:inline">Delete</span>
      </button>
    </li>
  );
}
