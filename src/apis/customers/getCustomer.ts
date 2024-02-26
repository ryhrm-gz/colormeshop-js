import type { ColormeClient } from '../../client';
import type { ColormeResponse, ColormeCustomerResponse } from '../../types';

export const getCustomer = async (
  client: ColormeClient,
  customerId: string
): ColormeResponse<ColormeCustomerResponse> => {
  return await client('/v1/customers', 'GET', {
    paths: [customerId],
  });
};
