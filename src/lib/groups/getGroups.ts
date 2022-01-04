import { AxiosError, AxiosInstance } from "axios";
import { ColormeGroupResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getGroups = async (
  client: AxiosInstance
): Promise<{ groups: ColormeGroupResponse[] }> => {
  try {
    const response = await client.get("groups");
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
