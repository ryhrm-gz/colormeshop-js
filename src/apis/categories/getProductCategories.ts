import { type ColormeClient } from '../../client';
import { type ColormeProductCategoriesResponse } from '../../types';

export const getProductCategories = async (client: ColormeClient) => {
  return await client<ColormeProductCategoriesResponse>(
    '/v1/categories',
    'GET'
  );
};
