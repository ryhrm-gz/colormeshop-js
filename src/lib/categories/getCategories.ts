import { AxiosError, AxiosInstance } from "axios";
import { ColormeCategoryResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getCategories = async (
  client: AxiosInstance
): Promise<{ categories: ColormeCategoryResponse[] }> => {
  try {
    const response = await client.get("categories");
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
