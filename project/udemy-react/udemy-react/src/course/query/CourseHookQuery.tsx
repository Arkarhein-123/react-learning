import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import type {Course} from "../data/Course.ts";
import {createCourseRequest, getAllCoursesRequest, getCoursesRequest} from "../service/CourseService.ts";

export function useGetAllCourses(){
    return useQuery<Course[]>({
        queryKey: ["courses"],
        queryFn:  getAllCoursesRequest,
        staleTime: 1000 * 5
    })

}


export function useGetCourses(){
    return useQuery<Course[]>({
        queryKey: ["courses"],
        queryFn:  getCoursesRequest,
        staleTime: 1000 * 5
    })

}
export function useCreateCourse(){
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

















