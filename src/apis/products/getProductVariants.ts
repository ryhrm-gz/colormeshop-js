import { type ColormeClient } from '../../client';
import {
  type ColormeGetProductVariantsQuery,
  type ColormeProductVariantsResponse,
} from '../../types';

export const getProductVariants = async (
  client: ColormeClient,
  productId: string,
  query?: ColormeGetProductVariantsQuery
) => {
  return await client<ColormeProductVariantsResponse>('/v1/products', 'GET', {
    paths: [productId, 'variants'],
    query,
  });
};
