import { ColormeAddProductParams, ColormeProductResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const addProduct = async (
  client: any,
  params: ColormeAddProductParams
): Promise<{ product: ColormeProductResponse }> => {
  try {
    const response = await client.post("products", {
      product: params,
    });
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
