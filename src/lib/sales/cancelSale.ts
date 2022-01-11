import { AxiosError, AxiosInstance } from "axios";
import { ColormeCancelSaleParams, ColormeSaleResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const cancelSale = async (
  client: AxiosInstance,
  saleId: number,
  params: ColormeCancelSaleParams
): Promise<{ sale: ColormeSaleResponse }> => {
  try {
    const response = await client.put(`sales/${saleId}/cancel`);
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
