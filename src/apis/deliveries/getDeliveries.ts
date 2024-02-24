import { client } from '../../client';
import { ColormeDeliveriesResponse } from '../../types';

export const getDeliveries = async (apiKey: string) => {
  return await client<ColormeDeliveriesResponse>(
    apiKey,
    '/v1/deliveries',
    'GET'
  );
};

getDeliveries(
  '5920abd3832915c2561ee9eb073d7c993a57f82887ed9f5ff777b1fd3f593480'
).then(console.log);
