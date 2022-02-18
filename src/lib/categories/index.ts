import { AxiosInstance } from "axios";
import { getCategories } from "./getCategories";

export const createCategories = (client: AxiosInstance) => {
  const categories = {
    /** 商品カテゴリー一覧を取得 */
    getCategories: () => getCategories(client),
  };

  return categories;
};
