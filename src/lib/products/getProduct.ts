import { AxiosError, AxiosInstance } from "axios";
import { ColormeGetProductParams, ColormeProductResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getProduct = async (
  client: AxiosInstance,
  params: ColormeGetProductParams
): Promise<{ product: ColormeProductResponse }> => {
  if (!params.product_id) {
    throw {
      message: "product_id is required",
    };
  }
  try {
    const response = await client.get(`products/${params.product_id}`);
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
