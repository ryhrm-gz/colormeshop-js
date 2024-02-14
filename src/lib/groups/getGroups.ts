import { ColormeGroupResponse } from "../..";
import { errorHandler } from "../errorHandler";

export const getGroups = async (
  client: any
): Promise<{ groups: ColormeGroupResponse[] }> => {
  try {
    const response = await client.get("groups");
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
