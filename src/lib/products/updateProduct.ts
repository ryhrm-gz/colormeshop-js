import { AxiosError, AxiosInstance } from "axios";
import { ColormeUpdateProductParams, ColormeProductResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const updateProduct = async (
  client: AxiosInstance,
  productId: number,
  params: ColormeUpdateProductParams
): Promise<{ product: ColormeProductResponse }> => {
  try {
    const response = await client.put(`products/${productId}`, {
      product: params,
    });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
