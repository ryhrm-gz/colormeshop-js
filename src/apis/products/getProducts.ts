import {
  ColormeGetProductsParams,
  ColormeMeta,
  ColormeProductResponse,
} from "../..";
import { errorHandler } from "../errorHandler";

export const getProducts = async (
  client: any,
  params?: ColormeGetProductsParams
): Promise<{ products: ColormeProductResponse[]; meta: ColormeMeta }> => {
  try {
    const response = await client.get("products", { params });
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
