import { ColormeGetStatParams, ColormeSalesStatResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getStat = async (
  client: any,
  params?: ColormeGetStatParams
): Promise<ColormeSalesStatResponse> => {
  try {
    const response = await client.get("sales/stat", { params });
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
