import { type ColormeClient } from '../../client';
import {
  type ColormePostProductRequestBody,
  type ColormeProductResponse,
} from '../../types';

export const postProduct = async (
  client: ColormeClient,
  body: ColormePostProductRequestBody
) => {
  return await client<ColormeProductResponse>('/v1/products', 'POST', {
    body,
  });
};
