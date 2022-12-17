import { ColormeCancelSaleParams, ColormeSaleResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const cancelSale = async (
  client: any,
  saleId: number,
  params: ColormeCancelSaleParams
): Promise<{ sale: ColormeSaleResponse }> => {
  try {
    const response = await client.put(`sales/${saleId}/cancel`, { params });
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
