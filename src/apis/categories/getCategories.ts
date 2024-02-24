import { ColormeCategoryResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getCategories = async (
  client: any
): Promise<{ categories: ColormeCategoryResponse[] }> => {
  try {
    const response = await client.get("categories");
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
