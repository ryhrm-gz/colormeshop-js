import { client } from '../../client';
import { ColormeSendSalesMailRequestBody } from '../../types';
export const sendSalesMail = async (
  apiKey: string,
  saleId: string,
  body: ColormeSendSalesMailRequestBody
) => {
  return await client(apiKey, '/v1/sales', 'POST', {
    paths: [saleId, 'mails'],
    body,
  });
};
