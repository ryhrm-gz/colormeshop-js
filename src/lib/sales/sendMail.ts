import { AxiosError, AxiosInstance } from "axios";
import { ColormeSendMailParams } from "../..";
import { errorHandler } from "../errorHandler";

export const sendMail = async (
  client: AxiosInstance,
  saleId: number,
  params: ColormeSendMailParams
) => {
  try {
    const response = await client.post(`sales/${saleId}/mails`, {
      mail: params,
    });
    return response.data;
  } catch (error: AxiosError | any) {
    throw errorHandler(error);
  }
};
