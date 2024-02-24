import { ColormeSendMailParams } from "../..";
import { errorHandler } from "../errorHandler";

export const sendMail = async (
  client: any,
  saleId: number,
  params: ColormeSendMailParams
) => {
  try {
    const response = await client.post(`sales/${saleId}/mails`, {
      mail: params,
    });
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
