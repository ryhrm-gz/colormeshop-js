import { ColormeUpdateSaleParams, ColormeSaleResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const updateSale = async (
  client: any,
  saleId: number,
  params: ColormeUpdateSaleParams
): Promise<{ sale: ColormeSaleResponse }> => {
  try {
    const response = await client.put(`sales/${saleId}`, {
      sale: params,
    });
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
