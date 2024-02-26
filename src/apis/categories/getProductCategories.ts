import type { ColormeClient } from '../../client';
import type {
  ColormeResponse,
  ColormeProductCategoriesResponse,
} from '../../types';

export const getProductCategories = async (
  client: ColormeClient
): ColormeResponse<ColormeProductCategoriesResponse> => {
  return await client('/v1/categories', 'GET');
};
