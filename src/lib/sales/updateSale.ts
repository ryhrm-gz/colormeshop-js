import { AxiosError, AxiosInstance } from "axios";
import { ColormeUpdateSaleParams, ColormeSaleResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const updateSale = async (
  client: AxiosInstance,
  saleId: number,
  params: ColormeUpdateSaleParams
): Promise<{ sale: ColormeSaleResponse }> => {
  try {
    console.log(params);
    const response = await client.put(`sales/${saleId}`, {
      sale: params,
    });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
