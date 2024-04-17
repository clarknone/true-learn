import { CategoryModel } from "./category";

export interface CourseModel {
  id: number;
  title: string;
  description: string;
  categoryId?: number;
  category?: CategoryModel;
}
