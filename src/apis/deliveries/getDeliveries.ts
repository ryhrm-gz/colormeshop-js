import { client } from '../../client';
import { ColormeDeliveriesResponse } from '../../types';

export const getDeliveries = async (apiKey: string) => {
  return await client<ColormeDeliveriesResponse>(
    apiKey,
    '/v1/deliveries',
    'GET'
  );
};
