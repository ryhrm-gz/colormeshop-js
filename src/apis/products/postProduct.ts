import { client } from '../../client';
import {
  ColormePostProductRequestBody,
  ColormeProductResponse,
} from '../../types';

export const postProduct = async (
  apiKey: string,
  body: ColormePostProductRequestBody
) => {
  return await client<ColormeProductResponse>(apiKey, '/v1/products', 'POST', {
    body,
  });
};
