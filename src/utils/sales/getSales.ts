import { AxiosError, AxiosInstance } from "axios";
import { errorHandler } from "../errorHandler";
import { ColormeGetSalesRequest } from "../..";

export const getSales = async (
  client: AxiosInstance,
  query?: ColormeGetSalesRequest
) => {
  try {
    const response = await client.get(`sales`, { params: query });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
