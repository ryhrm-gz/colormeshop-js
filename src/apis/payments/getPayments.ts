import { type ColormeClient } from '../../client';
import { type ColormePaymentsResponse } from '../../types';

export const getPayments = async (client: ColormeClient) => {
  return await client<ColormePaymentsResponse>('/v1/payments', 'GET');
};
