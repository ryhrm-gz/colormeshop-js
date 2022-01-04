import { AxiosError, AxiosInstance } from "axios";
import {
  ColormeGetProductsParams,
  ColormeMeta,
  ColormeProductResponse,
} from "../..";
import { errorHandler } from "../errorHandler";

export const getProducts = async (
  client: AxiosInstance,
  params?: ColormeGetProductsParams
): Promise<{ products: ColormeProductResponse; meta: ColormeMeta }> => {
  try {
    const response = await client.get("products", { params });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
