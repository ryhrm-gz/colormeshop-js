import { AxiosError, AxiosInstance } from "axios";
import { ColormeGetSaleParams, ColormeSaleResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getSale = async (
  client: AxiosInstance,
  params: ColormeGetSaleParams
): Promise<{ sale: ColormeSaleResponse }> => {
  if (!params.sale_id) {
    throw {
      message: "sale_id is required",
    };
  }
  try {
    const response = await client.get(`sales/${params.sale_id}`);
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
