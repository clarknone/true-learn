import { CategoryModel } from "@/lib/interface/category";
import axios from "axios";

export async function getCategories() {
  const url = "/mock/categories.json";
  return axios.get<CategoryModel[]>(url).then((res) => res.data);
}
