import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormeGetProductVariantsQuery,
  type ColormeProductVariantsResponse,
} from '../../types';

export const getProductVariants = async (
  client: ColormeClient,
  productId: string,
  query?: ColormeGetProductVariantsQuery
): ColormeResponse<ColormeProductVariantsResponse> => {
  return await client('/v1/products', 'GET', {
    paths: [productId, 'variants'],
    query,
  });
};
