import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormeProductGroupsResponse,
} from '../../types';

export const getProductGroups = async (
  client: ColormeClient
): ColormeResponse<ColormeProductGroupsResponse> => {
  return await client('/v1/groups', 'GET');
};
