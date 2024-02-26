import { type ColormeClient } from '../../client';
import { type ColormeSendSalesMailRequestBody } from '../../types';
export const sendSalesMail = async (
  client: ColormeClient,
  saleId: string,
  body: ColormeSendSalesMailRequestBody
) => {
  return await client('/v1/sales', 'POST', {
    paths: [saleId, 'mails'],
    body,
  });
};
