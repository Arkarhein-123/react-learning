import { useState } from "react";

export default function Content() {
  const [name, changeName] = useState("");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Arkar", "Hein", "Justin"];
    const randomNum = Math.floor(Math.random() * 3);
    changeName(names[randomNum]);
  };
  const handleNameChange2 = () => {
    const nextCount = count + 1;
    setCount(nextCount);
  };

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center">
          Hello {name} | count : {count}
        </h1>
        <button
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
          onClick={handleNameChange}
        >
          Change Name
        </button>

        <button
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
          onClick={handleNameChange2}
        >
          Change Count
        </button>
      </main>
    </>
  );
}
