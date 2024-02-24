import { client } from '../../client';
import {
  ColormeCustomersResponse,
  ColormeGetCustomersQuery,
} from '../../types';

export const getCustomers = async (
  apiKey: string,
  query?: ColormeGetCustomersQuery
) => {
  return await client<ColormeCustomersResponse>(
    apiKey,
    '/v1/customers',
    'GET',
    {
      query,
    }
  );
};
