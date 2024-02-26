import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormeSendSalesMailRequestBody,
} from '../../types';
export const sendSalesMail = async (
  client: ColormeClient,
  saleId: string,
  body: ColormeSendSalesMailRequestBody
): ColormeResponse<{}> => {
  return await client('/v1/sales', 'POST', {
    paths: [saleId, 'mails'],
    body,
  });
};
