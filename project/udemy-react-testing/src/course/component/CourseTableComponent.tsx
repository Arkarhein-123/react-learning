import {FaSpinner} from "react-icons/fa";
import {useGetCourses} from "../query/CourseHookQuery.tsx";

export default function CourseTableComponent() {

    const {
        data: courses,
        isLoading,
        isError
    } = useGetCourses();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-96">
                <FaSpinner className="text-5xl text-indigo-600 animate-spin" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center mt-10 text-red-500 text-lg">
                Failed to load courses.
            </div>
        );
    }

    return (
        <div className="p-6">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Course Management
                </h1>

                <p className="text-gray-500 mt-1">
                    View and manage all available courses.
                </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <div className="bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-5">
                    <h2 className="text-xl font-semibold text-white">
                        Courses ({courses?.length || 0})
                    </h2>
                </div>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>
                        <tr className="bg-gray-50 border-b">

                            <th className="px-6 py-4 text-left font-semibold text-gray-700">
                                Image
                            </th>

                            <th className="px-6 py-4 text-left font-semibold text-gray-700">
                                Title
                            </th>

                            <th className="px-6 py-4 text-left font-semibold text-gray-700">
                                Category
                            </th>

                            <th className="px-6 py-4 text-left font-semibold text-gray-700">
                                Teacher
                            </th>

                            <th className="px-6 py-4 text-left font-semibold text-gray-700">
                                Fees
                            </th>

                        </tr>
                        </thead>

                        <tbody>

                        {courses?.map((course) => (
                            <tr
                                key={course.courseId}
                                className="border-b hover:bg-indigo-50 transition duration-200"
                            >

                                <td className="px-6 py-4">
                                    <img
                                        src={`data:image/jpeg;base64,${course.imageBase64}`}
                                        alt={course.title}
                                        className="w-20 h-14 object-cover rounded-xl shadow"
                                    />
                                </td>

                                <td className="px-6 py-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            {course.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 line-clamp-2">
                                            {course.description}
                                        </p>
                                    </div>
                                </td>

                                <td className="px-6 py-4">
                                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {course.category}
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-gray-700">
                                    {course.teacherName}
                                </td>

                                <td className="px-6 py-4">
                                    <span className="font-semibold text-green-600">
                                        ${course.fees}
                                    </span>
                                </td>

                            </tr>
                        ))}

                        </tbody>

                    </table>

                    {courses?.length === 0 && (
                        <div className="text-center py-16 text-gray-500">
                            No courses available.
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}