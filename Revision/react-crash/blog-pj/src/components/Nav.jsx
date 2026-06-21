import { NavLink, useNavigate } from "react-router-dom";

export default function Nav({ search, setSearch }) {
    // Tailwind classes for active and inactive links
    const linkStyle = ({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`;
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-800 p-4 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <h2
                className="text-white text-2xl cursor-pointer"
                onClick={() => navigate("/")}
            >
                ReactJS Blog
            </h2>
            <form
                className="w-full md:w-72"
                onSubmit={(e) => e.preventDefault()}
            >
                <label htmlFor="search" className="sr-only">
                    Search Posts
                </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Posts..."
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>

            {/* Navigation Links */}
            <ul className="flex items-center gap-2">
                <li>
                    <NavLink to="/" end className={linkStyle}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/post" className={linkStyle}>
                        Post
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={linkStyle}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
