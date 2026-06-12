import {useCreateCourse} from "../../course/query/CourseHookQuery.tsx";
import {type SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {
    FaBookOpen,
    FaDollarSign,
    FaLayerGroup,
    FaImage,
    FaFileAlt,
    FaPlus
} from "react-icons/fa";

import {MdRefresh} from "react-icons/md";

// Type
interface CourseFormInput {
    title: string;
    fees: number;
    description: string;
    category_name: string;
    image: FileList;
}

export default function  CourseCreateComponent() {

    const courseMutation = useCreateCourse();
    const {register, handleSubmit, reset} = useForm<CourseFormInput>();
    const navigator = useNavigate();

    const onSubmit: SubmitHandler<CourseFormInput> = data => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("fees", data.fees.toString());
        formData.append("description", data.description);
        formData.append("category_name", data.category_name);

        if (data.image && data.image.length > 0) {
            formData.append("image", data.image[0]);
        }
        console.log(Array.from(formData.entries()));

        courseMutation.mutate(formData, {
            onSuccess: () => {
                reset();
                navigator("/teacher")
            }
        });
    }

    return (
        <>
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

                    {/* Header */}
                    <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-8 text-white">
                        <h1 className="text-4xl font-bold flex items-center gap-3">
                            <FaBookOpen />
                            Create Course
                        </h1>
                        <p className="mt-2 text-indigo-100">
                            Publish a new course for your students.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-8 space-y-6"
                    >

                        {/* Title */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">
                                Course Title
                            </label>

                            <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-indigo-500">
                                <FaBookOpen className="text-indigo-500 text-lg" />

                                <input
                                    {...register("title")}
                                    type="text"
                                    placeholder="Spring Boot Masterclass"
                                    className="w-full p-4 outline-none bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Fees & Category */}
                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <label className="text-sm font-semibold text-gray-700">
                                    Course Fees
                                </label>

                                <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-indigo-500">
                                    <FaDollarSign className="text-green-500" />

                                    <input
                                        {...register("fees")}
                                        type="number"
                                        placeholder="99"
                                        className="w-full p-4 outline-none bg-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700">
                                    Category
                                </label>

                                <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-indigo-500">
                                    <FaLayerGroup className="text-purple-500" />

                                    <select
                                        {...register("category_name")}
                                        className="w-full p-4 outline-none bg-transparent"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Programming">
                                            💻 Programming
                                        </option>
                                        <option value="Economics">
                                            📈 Economics
                                        </option>
                                        <option value="Maths">
                                            📚 Maths
                                        </option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        {/* Description */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">
                                Description
                            </label>

                            <div className="mt-2 flex border border-gray-200 rounded-2xl px-4 pt-4 focus-within:ring-2 focus-within:ring-indigo-500">
                                <FaFileAlt className="text-blue-500 mt-1 mr-3" />

                                <textarea
                                    rows={5}
                                    {...register("description")}
                                    placeholder="Describe your course..."
                                    className="w-full outline-none resize-none bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Upload */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">
                                Course Thumbnail
                            </label>

                            <div className="mt-2 border-2 border-dashed border-indigo-300 rounded-2xl p-6 bg-indigo-50 hover:bg-indigo-100 transition">
                                <div className="flex items-center gap-3 mb-3">
                                    <FaImage className="text-indigo-600 text-xl" />
                                    <span className="font-medium text-gray-700">
                            Upload Course Image
                        </span>
                                </div>

                                <input
                                    type="file"
                                    accept="image/*"
                                    {...register("image")}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-4">

                            <button
                                type="submit"
                                disabled={courseMutation.isPending}
                                className="flex-1 flex justify-center items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
                            >
                                <FaPlus />

                                {courseMutation.isPending
                                    ? "Creating..."
                                    : "Create Course"}
                            </button>

                            <button
                                type="button"
                                onClick={() => reset()}
                                className="flex items-center gap-2 px-8 py-4 border border-gray-300 rounded-2xl hover:bg-gray-100 transition"
                            >
                                <MdRefresh />
                                Reset
                            </button>

                        </div>

                    </form>
                </div>
        </>
    );
}
