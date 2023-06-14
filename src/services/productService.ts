import axios from "axios";
import { apiClient } from "./api";
import { Product } from "../shared/types";

export const get = async (slug: string | undefined) => {
  const response = await apiClient.get<Product[]>(`/products?slug=${slug}`);
  return response.data;
};
