import { client } from '../../client';
import { ColormeCustomerResponse } from '../../types';

export const getCustomer = async (apiKey: string, customerId: string) => {
  return await client<ColormeCustomerResponse>(apiKey, '/v1/customers', 'GET', {
    paths: [customerId],
  });
};
