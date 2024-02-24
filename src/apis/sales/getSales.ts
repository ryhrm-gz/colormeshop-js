import { client } from '../../client';
import { ColormeGetSalesQuery, ColormeSalesResponse } from '../../types';

export const getSales = async (
  apiKey: string,
  query?: ColormeGetSalesQuery
) => {
  return await client<ColormeSalesResponse>(apiKey, '/v1/sales', 'GET', {
    query,
  });
};
