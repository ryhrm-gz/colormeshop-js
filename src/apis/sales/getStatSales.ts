import { type ColormeClient } from '../../client';
import type {
  ColormeStatSaleQuery,
  ColormeStatSaleResponse,
} from '../../types';

export const getStatSales = async (
  client: ColormeClient,
  query?: ColormeStatSaleQuery
) => {
  return await client<ColormeStatSaleResponse>('/v1/sales/stat', 'GET', {
    query,
  });
};
