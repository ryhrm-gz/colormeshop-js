import { client } from '../../client';
import { ColormeSaleResponse } from '../../types';

export const getSale = async (apiKey: string, saleId: string) => {
  return await client<ColormeSaleResponse>(apiKey, `/v1/sales`, 'GET', {
    paths: [saleId],
  });
};
