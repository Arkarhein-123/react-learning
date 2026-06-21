import { Link, useOutletContext } from "react-router-dom";

export default function Home() {
    const { posts, loading, error, search } = useOutletContext();

    const postFilter = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(search.toLowerCase() || "") ||
            post.title.toLowerCase().includes(search.toLowerCase() || ""),
    );

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-500 font-medium">
                    Loading Posts...
                </p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg my-4">
                <p className="text-red-700 font-medium">Error: {error}</p>
            </div>
        );
    }

    if (!posts && posts.length === 0) {
        return (
            <div className="text-cener font-medium py-12">
                <p className="text-gray-500 text-lg">No Posts to Display</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 border-b pb-2">
                Recent Articles
            </h1>
            {postFilter.length > 0 ? (
                postFilter.map((post) => (
                    <article
                        key={post.id}
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                    >
                        <Link to={`/post/${post.id}`}>
                            <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-xs text-gray-400 mt-1">
                            {post.datetime}
                        </p>

                        {/* Display just a short snippet of the body text */}
                        <p className="text-gray-600 mt-3 line-clamp-3">
                            {post.body.length <= 150
                                ? post.body
                                : `${post.body.slice(0, 150)}...`}
                        </p>
                    </article>
                ))
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        No articles match your search term "{search}"
                    </p>
                </div>
            )}
        </div>
    );
}
