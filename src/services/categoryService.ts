import { Category } from "../shared/types";
import { apiClient } from "./api";

const getAll = async () => {
  const response = await apiClient.get<Category[]>("/categories");
  return response.data;
};

const get = async (name: any | undefined) => {
  const response = await apiClient.get<Category[]>(`/categories?name=${name}`);
  return response.data;
};

export { getAll, get };
