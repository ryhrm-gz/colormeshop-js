import { type ColormeClient } from '../../client';
import {
  type ColormeCustomersResponse,
  type ColormeGetCustomersQuery,
} from '../../types';

export const getCustomers = async (
  client: ColormeClient,
  query?: ColormeGetCustomersQuery
) => {
  return await client<ColormeCustomersResponse>('/v1/customers', 'GET', {
    query,
  });
};
