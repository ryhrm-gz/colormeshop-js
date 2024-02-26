import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormeProductPickupResponse,
  type ColormePutProductPickupRequestBody,
} from '../../types';

export const postProductPickup = async (
  client: ColormeClient,
  productId: string,
  body: ColormePutProductPickupRequestBody
): ColormeResponse<ColormeProductPickupResponse> => {
  return await client('/v1/products', 'POST', {
    paths: [productId, 'pickups'],
    body,
  });
};
