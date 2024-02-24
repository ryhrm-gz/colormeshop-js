import { client } from '../../client';
import {
  ColormeGetProductVariantsQuery,
  ColormeProductVariantsResponse,
} from '../../types';

export const getProductVariants = async (
  apiKey: string,
  productId: string,
  query?: ColormeGetProductVariantsQuery
) => {
  return await client<ColormeProductVariantsResponse>(
    apiKey,
    '/v1/products',
    'GET',
    {
      paths: [productId, 'variants'],
      query,
    }
  );
};
