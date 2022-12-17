import {
  ColormeGetStocksParams,
  ColormeMeta,
  ColormeStockResponse,
} from "../..";
import { errorHandler } from "../errorHandler";

export const getStocks = async (
  client: any,
  params?: ColormeGetStocksParams
): Promise<{ stocks: ColormeStockResponse[]; meta: ColormeMeta }> => {
  try {
    const response = await client.get("stocks", { params });
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
