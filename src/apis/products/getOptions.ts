import {
  ColormeGetOptionsParams,
  ColormeMeta,
  ColormeOptionsResponse,
} from "../../types";
import { errorHandler } from "../errorHandler";

export const getOptions = async (
  client: any,
  productId: number,
  params?: ColormeGetOptionsParams
): Promise<{ variants: ColormeOptionsResponse[]; meta: ColormeMeta }> => {
  try {
    const response = await client.get(`products/${productId}/variants`, {
      params,
    });
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
