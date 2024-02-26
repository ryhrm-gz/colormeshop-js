import { type ColormeClient } from '../../client';
import {
  type ColormeResponse,
  type ColormeGiftSettingResponse,
} from '../../types';

export const getGiftSetting = async (
  client: ColormeClient
): ColormeResponse<ColormeGiftSettingResponse> => {
  return await client('/v1/gift', 'GET');
};
