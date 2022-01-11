import { AxiosError, AxiosInstance } from "axios";
import { ColormeProductResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getProduct = async (
  client: AxiosInstance,
  productId: number
): Promise<{ product: ColormeProductResponse }> => {
  if (!productId) {
    throw {
      message: "product_id is required",
    };
  }
  try {
    const response = await client.get(`products/${productId}`);
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
