// Input.tsx
interface InputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export default function Input({ inputValue, setInputValue }: InputProps) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-md mx-auto p-4"
    >
      <input
        type="text"
        placeholder="Enter Color (e.g., red, #3490dc)"
        required
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm text-gray-800 placeholder-gray-400 transition duration-200"
      />
    </form>
  );
}
