import { AxiosError, AxiosInstance } from "axios";
import {
  ColormeGetOptionsParams,
  ColormeMeta,
  ColormeOptionsResponse,
} from "../../types";
import { errorHandler } from "../errorHandler";

export const getOptions = async (
  client: AxiosInstance,
  productId: number,
  params?: ColormeGetOptionsParams
): Promise<{ variants: ColormeOptionsResponse[]; meta: ColormeMeta }> => {
  try {
    const response = await client.get(`products/${productId}/variants`, {
      params,
    });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
