export default function NewPost({ register, onSubmit, handleSubmit, errors }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Create New Post
            </h2>
            {/* ✓ Use React Hook Form's handleSubmit wrapper */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-7"
            >
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Title:
                    </label>
                    {/* ✓ Registered field with custom error validation rules */}
                    <input
                        id="title"
                        type="text"
                        {...register("title", {
                            required: "Title is required",
                        })}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                            errors.title
                                ? "border-red-500 focus:ring-red-500"
                                : "focus:ring-blue-500"
                        }`}
                        placeholder="Enter post title..."
                    />
                    {/* Display Error Message */}
                    {errors.title && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.title.message}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="body"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Content:
                    </label>
                    {/* ✓ Registered textarea field */}
                    <textarea
                        id="body"
                        rows="6"
                        {...register("body", {
                            required: "Content is required",
                            minLength: {
                                value: 10,
                                message:
                                    "Content must be at least 10 characters long",
                            },
                        })}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                            errors.body
                                ? "border-red-500 focus:ring-red-500"
                                : "focus:ring-blue-500"
                        }`}
                        placeholder="Write your article content here..."
                    />
                    {/* Display Error Message */}
                    {errors.body && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.body.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                    Publish Post
                </button>
            </form>
        </div>
    );
}
