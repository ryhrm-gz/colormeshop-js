import { client } from '../../client';
import {
  ColormeProductResponse,
  ColormeUpdateProductRequestBody,
} from '../../types';

export const updateProduct = async (
  apiKey: string,
  productId: string,
  body: ColormeUpdateProductRequestBody
) => {
  return await client<ColormeProductResponse>(apiKey, '/v1/products', 'PUT', {
    paths: [productId],
    body,
  });
};
