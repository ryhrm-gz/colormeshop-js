import { type ColormeClient } from '../../client';
import {
  type ColormeGetProductsQuery,
  type ColormeProductsResponse,
} from '../../types';

export const getProducts = async (
  client: ColormeClient,
  query?: ColormeGetProductsQuery
) => {
  return await client<ColormeProductsResponse>('/v1/products', 'GET', {
    query,
  });
};
