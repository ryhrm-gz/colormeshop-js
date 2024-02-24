import { client } from '../../client';
import {
  ColormeProductPickupResponse,
  ColormePutProductPickupRequestBody,
} from '../../types';

export const postProductPickup = async (
  apiKey: string,
  productId: string,
  body: ColormePutProductPickupRequestBody
) => {
  return await client<ColormeProductPickupResponse>(
    apiKey,
    '/v1/products',
    'POST',
    {
      paths: [productId, 'pickups'],
      body,
    }
  );
};
