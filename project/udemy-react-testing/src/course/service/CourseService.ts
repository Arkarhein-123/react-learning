import axios from "axios";
import { getToken } from "../../auth/service/AuthService.ts";
import type { Course } from "../data/Course.ts";

const COURSE_URL = "http://localhost:8080/api/courses";

interface CourseDtoResponse {
  courseId: number;
  title: string;
  fees: number;
  description: string;
  category: string;
  teacherName: string;
  imagebase64?: string | null;
}

const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: token } : {};
};

export const getCourseRequest = async (): Promise<Course[]> => {
  const response = await axios.get<CourseDtoResponse[]>(
    `${COURSE_URL}/teacher`,
    { headers: authHeaders() },
  );

  return response.data.map((course) => ({
    courseId: course.courseId,
    title: course.title,
    description: course.description,
    fees: course.fees,
    category: course.category,
    teacherName: course.teacherName,
    imageBase64: course.imagebase64 ?? "",
  }));
};

export const getAllCoursesRequest = async (): Promise<Course[]> => {
  const response = await axios.get<CourseDtoResponse[]>(
    `${COURSE_URL}/find-all`,
    { headers: authHeaders() },
  );

  return response.data.map((course) => ({
    courseId: course.courseId,
    title: course.title,
    description: course.description,
    fees: course.fees,
    category: course.category,
    teacherName: course.teacherName,
    imageBase64: course.imagebase64 ?? "",
  }));
};

export const createCourseRequest = async (
  formData: FormData,
): Promise<string> => {
  const response = await axios.post(`${COURSE_URL}/create-course`, formData, {
    headers: {
      ...authHeaders(),
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};