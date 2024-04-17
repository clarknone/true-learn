import { CourseModel } from "@/lib/interface/courses";
import axios from "axios";

export async function getCourses() {
  const url = "/mock/courses.json";
  return axios.get<CourseModel[]>(url).then((res) => res.data);
}
