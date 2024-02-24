import { client } from '../../client';
import { ColormeProductGroupsResponse } from '../../types';

export const getProductGroups = async (apiKey: string) => {
  return await client<ColormeProductGroupsResponse>(
    apiKey,
    '/v1/groups',
    'GET'
  );
};
