import { client } from '../../client';
import { ColormeProductCategoriesResponse } from '../../types';

export const getProductCategories = async (apiKey: string) => {
  return await client<ColormeProductCategoriesResponse>(
    apiKey,
    '/v1/categories',
    'GET'
  );
};
