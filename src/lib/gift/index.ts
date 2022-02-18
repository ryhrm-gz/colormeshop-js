import { AxiosInstance } from "axios";
import { getGift } from "./getGift";

export const createGift = (client: AxiosInstance) => {
  const gift = {
    /** ギフト設定を取得 */
    getGift: () => getGift(client),
  };

  return gift;
};
