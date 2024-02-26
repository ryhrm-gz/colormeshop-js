import { type ColormeClient } from '../../client';
import type {
  ColormeResponse,
  ColormeStatSaleQuery,
  ColormeStatSaleResponse,
} from '../../types';

export const getStatSales = async (
  client: ColormeClient,
  query?: ColormeStatSaleQuery
): ColormeResponse<ColormeStatSaleResponse> => {
  return await client('/v1/sales/stat', 'GET', {
    query,
  });
};
