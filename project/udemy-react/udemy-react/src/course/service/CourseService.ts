import axios from "axios";
import {getToken} from "../../auth/service/AuthService.ts";
import type {Course} from "../data/Course.ts";


axios.interceptors.request.use(
    function (config) {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
const COURSE_URL = 'http://localhost:8080/api/courses';

export const getCoursesRequest = async ():Promise<Course[]> =>{
    const response = await axios.get(`${COURSE_URL}/teacher`);
    return response.data;
}

export const getAllCoursesRequest = async ():Promise<Course[]> =>{
    const response = await axios.get(`${COURSE_URL}`);
    return response.data;
}
export const createCourseRequest =
    async (formData:FormData):Promise<string> =>{
    const response = await axios.post(COURSE_URL,formData,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
}






