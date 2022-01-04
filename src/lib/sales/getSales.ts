import { AxiosError, AxiosInstance } from "axios";
import { ColormeGetSalesParams, ColormeSaleResponse, ColormeMeta } from "../..";
import { errorHandler } from "../errorHandler";

export const getSales = async (
  client: AxiosInstance,
  params?: ColormeGetSalesParams
): Promise<{ sales: ColormeSaleResponse[]; meta: ColormeMeta }> => {
  try {
    const response = await client.get("sales", { params });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
