import type {Course} from "../data/Course.ts";
import {createCourseRequest, getCourseRequest, getAllCoursesRequest} from "../service/CourseService.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

export function useGetCourses() {
    return useQuery<Course[]>({
        queryKey: ["courses"],
        queryFn: getCourseRequest,
        staleTime: 1000 * 5
    })
}

export function useGetAllCourses() {
    return useQuery<Course[]>({
        queryKey: ["all-courses"],
        queryFn: getAllCoursesRequest,
        staleTime: 1000 * 5
    })
}

export function useCreateCourse() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createCourseRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["courses"]
            })
        }
    })
}