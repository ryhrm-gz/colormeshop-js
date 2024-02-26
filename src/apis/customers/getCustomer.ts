import { type ColormeClient } from '../../client';
import { type ColormeCustomerResponse } from '../../types';

export const getCustomer = async (
  client: ColormeClient,
  customerId: string
) => {
  return await client<ColormeCustomerResponse>('/v1/customers', 'GET', {
    paths: [customerId],
  });
};
