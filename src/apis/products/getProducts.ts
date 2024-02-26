import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormeGetProductsQuery,
  type ColormeProductsResponse,
} from '../../types';

export const getProducts = async (
  client: ColormeClient,
  query?: ColormeGetProductsQuery
): ColormeResponse<ColormeProductsResponse> => {
  return await client('/v1/products', 'GET', {
    query,
  });
};
