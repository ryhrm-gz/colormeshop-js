import { AxiosError, AxiosInstance } from "axios";
import { ColormeGetStatParams, ColormeSalesStatResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getStat = async (
  client: AxiosInstance,
  params?: ColormeGetStatParams
): Promise<ColormeSalesStatResponse> => {
  try {
    const response = await client.get("sales/stat", { params });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
