import { client } from '../../client';
import {
  ColormeProductPickupResponse,
  ColormePutProductPickupRequestBody,
} from '../../types';

export const updateProductPickup = async (
  apiKey: string,
  productId: string,
  body: ColormePutProductPickupRequestBody
) => {
  return await client<ColormeProductPickupResponse>(
    apiKey,
    '/v1/products',
    'PUT',
    {
      paths: [productId, 'pickups'],
      body,
    }
  );
};
