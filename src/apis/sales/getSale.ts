import { ColormeSaleResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getSale = async (
  client: any,
  saleId: number
): Promise<{ sale: ColormeSaleResponse }> => {
  if (!saleId) {
    throw {
      message: "sale_id is required",
    };
  }
  try {
    const response = await client.get(`sales/${saleId}`);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
