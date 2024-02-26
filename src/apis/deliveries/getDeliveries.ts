import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormeDeliveriesResponse,
} from '../../types';

export const getDeliveries = async (
  client: ColormeClient
): ColormeResponse<ColormeDeliveriesResponse> => {
  return await client('/v1/deliveries', 'GET');
};
