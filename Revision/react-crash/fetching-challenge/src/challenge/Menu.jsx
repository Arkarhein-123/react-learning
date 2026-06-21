import { useEffect, useState } from "react";
import List from "./List";

export default function Menu() {
    const [view, setView] = useState("posts");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${view}`,
            );
            if (!response.ok) throw Error("Data can't be fetched...");
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, [view]);

    return (
        <div>
            {/* Buttons Container */}
            <div className="flex items-center justify-around max-w-md mx-auto mt-8 p-2 bg-gray-100 rounded-xl shadow-sm">
                <button
                    onClick={() => setView("posts")}
                    className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                        view === "posts"
                            ? "bg-blue-600 text-white shadow-md scale-105"
                            : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                >
                    Posts
                </button>

                <button
                    onClick={() => setView("todos")}
                    className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                        view === "todos"
                            ? "bg-blue-600 text-white shadow-md scale-105"
                            : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                >
                    Todos
                </button>

                <button
                    onClick={() => setView("users")}
                    className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                        view === "users"
                            ? "bg-blue-600 text-white shadow-md scale-105"
                            : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                >
                    Users
                </button>
            </div>

            <div>
                <List data={data} />
            </div>
        </div>
    );
}
