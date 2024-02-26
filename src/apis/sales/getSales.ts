import { type ColormeClient } from '../../client';
import type { ColormeGetSalesQuery, ColormeSalesResponse } from '../../types';

export const getSales = async (
  client: ColormeClient,
  query?: ColormeGetSalesQuery
) => {
  return await client<ColormeSalesResponse>('/v1/sales', 'GET', {
    query,
  });
};
