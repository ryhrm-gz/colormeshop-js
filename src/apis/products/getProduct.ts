import { ColormeProductResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getProduct = async (
  client: any,
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
  } catch (error) {
    throw errorHandler(error);
  }
};
