import { type ColormeClient } from '../../client';
import { type ColormeProductGroupsResponse } from '../../types';

export const getProductGroups = async (client: ColormeClient) => {
  return await client<ColormeProductGroupsResponse>('/v1/groups', 'GET');
};
