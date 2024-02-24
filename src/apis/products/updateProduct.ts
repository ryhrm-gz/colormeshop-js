import { ColormeUpdateProductParams, ColormeProductResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const updateProduct = async (
  client: any,
  productId: number,
  params: ColormeUpdateProductParams
): Promise<{ product: ColormeProductResponse }> => {
  try {
    const response = await client.put(`products/${productId}`, {
      product: params,
    });
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
