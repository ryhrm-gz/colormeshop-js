import { getPayments } from "./getPayments";

export const creatgePayments = (client: any) => {
  const payments = {
    /** 決済設定の一覧を取得 */
    getPayments: () => getPayments(client),
  };

  return payments;
};
