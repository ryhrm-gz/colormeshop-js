import { client } from '../../client';
import { ColormePaymentsResponse } from '../../types';

export const getPayments = async (apiKey: string) => {
  return await client<ColormePaymentsResponse>(apiKey, '/v1/payments', 'GET');
};
