import { AxiosError, AxiosInstance } from "axios";
import {
  ColormeGetStocksParams,
  ColormeMeta,
  ColormeStockResponse,
} from "../..";
import { errorHandler } from "../errorHandler";

export const getStocks = async (
  client: AxiosInstance,
  params?: ColormeGetStocksParams
): Promise<{ stocks: ColormeStockResponse[]; meta: ColormeMeta }> => {
  try {
    const response = await client.get("stocks", { params });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
