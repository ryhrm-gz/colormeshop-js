import { client } from '../../client';
import { ColormeSaleResponse, ColormeUpdateSaleRequestBody } from '../../types';

export const updateSale = async (
  apiKey: string,
  saleId: string,
  body: ColormeUpdateSaleRequestBody
) => {
  return await client<ColormeSaleResponse>(apiKey, '/v1/sales', 'PUT', {
    paths: [saleId],
    body,
  });
};
