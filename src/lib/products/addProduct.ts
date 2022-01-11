import { AxiosError, AxiosInstance } from "axios";
import { ColormeAddProductParams, ColormeProductResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const addProduct = async (
  client: AxiosInstance,
  params: ColormeAddProductParams
): Promise<{ product: ColormeProductResponse }> => {
  try {
    const response = await client.post("products", {
      product: params,
    });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
