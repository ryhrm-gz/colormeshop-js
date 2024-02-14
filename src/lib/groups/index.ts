import { getGroups } from "./getGroups";

export const createGroups = (client: any) => {
  const groups = {
    /** 商品グループ一覧を取得 */
    getGroups: () => getGroups(client),
  };

  return groups;
};
