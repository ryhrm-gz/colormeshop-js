import { client } from '../../client';
import { ColormeSaleResponse } from '../../types';

export const cancelSale = async (apiKey: string, saleId: string) => {
  return await client<ColormeSaleResponse>(apiKey, '/v1/sales', 'PUT', {
    paths: [saleId, 'cancel'],
  });
};
