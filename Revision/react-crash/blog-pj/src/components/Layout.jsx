import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function Layout({
    posts,
    setPosts,
    search,
    setSearch,
    error,
    loading,
}) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            <Nav search={search} setSearch={setSearch} />
            <main className="flex-grow container mx-auto px-4 py-6 max-w-4xl">
                <Outlet context={{ posts, setPosts, search, error, loading }} />
            </main>
            <Footer />
        </div>
    );
}
