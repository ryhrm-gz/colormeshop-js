import { AxiosInstance } from "axios";
import { getPayments } from "./getPayments";

export const creatgePayments = (client: AxiosInstance) => {
  const payments = {
    /** 決済設定の一覧を取得 */
    getPayments: () => getPayments(client),
  };

  return payments;
};
