import { useForm } from "react-hook-form";
import {
    useOutletContext,
    useParams,
    Link,
    useNavigate,
} from "react-router-dom";
import NewPost from "../components/NewPost";
import { apiService } from "../service/apiService";

export default function PostPage() {
    const { id } = useParams();
    const { posts, setPosts } = useOutletContext();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const savePost = await apiService.createPost(data);
            setPosts([...posts, savePost]);
            reset();
            alert("Post created successfully...");
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    // Add this simple formatter helper inside PostPage
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    if (!id) {
        return (
            <NewPost
                register={register}
                errors={errors}
                reset={reset}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            />
        );
    }

    // Single post view fallback logic
    const post = posts.find((p) => String(p.id) === String(id));

    return (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            {post ? (
                <article>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        {post.title}
                    </h1>
                    <p className="text-xs text-gray-400 mb-6">
                        {formatDate(post.datetime)}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                        {post.body}
                    </p>
                </article>
            ) : (
                <div className="text-center py-8">
                    <h2 className="text-2xl font-bold text-red-600">
                        Post Not Found
                    </h2>
                    <Link
                        to="/"
                        className="text-blue-500 hover:underline mt-4 inline-block"
                    >
                        Return to Homepage
                    </Link>
                </div>
            )}
        </div>
    );
}
