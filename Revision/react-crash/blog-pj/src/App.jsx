import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PostPage from "./pages/PostPage";
import Missing from "./components/Missing";
import { useEffect, useState } from "react";
import { apiService } from "./service/apiService";

export default function App() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiService.getAllPosts();
                setPosts(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        const timer = setTimeout(() => {
            fetchData();
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Layout
                    posts={posts}
                    setPosts={setPosts}
                    search={search}
                    setSearch={setSearch}
                    error={error}
                    loading={loading}
                />
            ),
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "post", element: <PostPage /> },
                { path: "post/:id", element: <PostPage /> },
                { path: "*", element: <Missing /> },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
