import { client } from '../../client';
import { ColormeStatSaleQuery, ColormeStatSaleResponse } from '../../types';

export const getStatSales = async (
  apiKey: string,
  query?: ColormeStatSaleQuery
) => {
  return await client<ColormeStatSaleResponse>(
    apiKey,
    '/v1/sales/stat',
    'GET',
    {
      query,
    }
  );
};
