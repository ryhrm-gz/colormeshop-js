import { AxiosError, AxiosInstance } from "axios";
import { ColormeSaleResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getSale = async (
  client: AxiosInstance,
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
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
