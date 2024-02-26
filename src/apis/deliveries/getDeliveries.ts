import { type ColormeClient } from '../../client';
import { type ColormeDeliveriesResponse } from '../../types';

export const getDeliveries = async (client: ColormeClient) => {
  return await client<ColormeDeliveriesResponse>('/v1/deliveries', 'GET');
};
