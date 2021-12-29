import { AxiosInstance } from "axios";
import { ColormeGetSalesRequest } from "../..";
import { apiUrl } from "../..";

export const getSales = async (
  client: AxiosInstance,
  query?: ColormeGetSalesRequest
) => {
  const response = await client.get(`${apiUrl}/sales`, { params: query });
  return response.data;
};
