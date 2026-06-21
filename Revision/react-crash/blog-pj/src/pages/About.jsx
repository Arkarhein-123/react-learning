export default function About() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto mt-6">
            <h1 className="text-3xl font-extrabold text-gray-900 border-b pb-4 mb-6">
                About This Blog
            </h1>

            <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                    Welcome to the ReactJS Blog! This application is a fully
                    dynamic single-page application (SPA) built to demonstrate
                    modern frontend development practices.
                </p>
                <p>
                    It features advanced client-side routing, shared state
                    layouts using React Router context, and performs
                    asynchronous CRUD operations talking directly to a simulated
                    REST API database.
                </p>
            </div>

            {/* Tech Stack Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Tech Stack Used:
                </h2>
                <ul className="grid grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                        <span>⚛️</span> React (Hooks & Lifecycle)
                    </li>
                    <li className="flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-2 rounded-md text-sm font-medium">
                        <span>🛣️</span> React Router v6/v7
                    </li>
                    <li className="flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-2 rounded-md text-sm font-medium">
                        <span>🎨</span> Tailwind CSS Styles
                    </li>
                    <li className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-2 rounded-md text-sm font-medium">
                        <span>📦</span> JSON Server (REST API)
                    </li>
                </ul>
            </div>
        </div>
    );
}
