import { type ColormeClient } from '../../client';
import type {
  ColormeGetSalesQuery,
  ColormeResponse,
  ColormeSalesResponse,
} from '../../types';

export const getSales = async (
  client: ColormeClient,
  query?: ColormeGetSalesQuery
): ColormeResponse<ColormeSalesResponse> => {
  return await client('/v1/sales', 'GET', {
    query,
  });
};
