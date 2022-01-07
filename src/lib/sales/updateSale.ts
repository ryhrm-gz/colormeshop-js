import { AxiosError, AxiosInstance } from "axios";
import { ColormeUpdateSaleParams, ColormeSaleResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const updateSale = async (
  client: AxiosInstance,
  saleId: number,
  params: { sale: ColormeUpdateSaleParams }
): Promise<{ sale: ColormeSaleResponse }> => {
  try {
    const response = await client.put(`sales/${saleId}`, { ...params });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
