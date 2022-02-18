import { AxiosInstance } from "axios";
import {
  ColormeCancelSaleParams,
  ColormeGetSalesParams,
  ColormeGetStatParams,
  ColormeSendMailParams,
  ColormeUpdateSaleParams,
} from "../..";
import { cancelSale } from "./cancelSale";
import { getSale } from "./getSale";
import { getSales } from "./getSales";
import { getStat } from "./getStat";
import { sendMail } from "./sendMail";
import { updateSale } from "./updateSale";

export const createSales = (client: AxiosInstance) => {
  const sales = {
    /**
     * 受注データのリストを取得
     * 受注データのリストを取得します。（日付が指定されていない場合は直近1週間分を取得します。）
     */
    getSales: (params?: ColormeGetSalesParams) => getSales(client, params),
    /** 売上集計の取得 */
    getStat: (params?: ColormeGetStatParams) => getStat(client, params),
    /** 受注データの取得 */
    getSale: (
      /** 受注ID */
      saleId: number
    ) => getSale(client, saleId),
    /**
     * 受注データの更新
     * 該当受注の決済がAmazon Pay、LINE Pay、または楽天ペイ（オンライン決済）である場合は、熨斗・メッセージカード・ラッピングの手数料を更新すると、決済金額が自動的に購入者に請求もしくは返金されます。
     *
     * ただし、LINE Payの場合は、決済金額の変更は減額のみ行うことができます。
     */
    updateSale: (
      /** 受注ID */
      saleId: number,
      params: ColormeUpdateSaleParams
    ) => updateSale(client, saleId, params),
    /**
     * 受注のキャンセル
     * 受注をキャンセルすると、以下のことが起こります。
     *
     * - 該当受注の商品購入数が0になる
     * - 該当受注の合計金額が0になる
     * - 該当受注の`canceled`が`true`になる
     * - 該当受注に使用されたショップポイント・GMOポイントがキャンセルされる
     * - 該当受注の決済がAmazon Pay、LINE Pay、または楽天ペイ（オンライン決済）である場合は、決済金額が自動的に購入者へ返金される
     * - 該当受注の決済がPayPay（イプシロン）である場合には、イプシロン側の決済もキャンセルされる
     * - ショップポイントがキャンセルされる
     *
     * 販売手数料確定前の場合は以下のことが起こります。
     * - 販売手数料が0になる
     * - 付与したGMOポイントがキャンセルされる
     * - 購入者が使用したGMOポイントがキャンセルされる
     *
     * 現在、以下の機能はサポートしていません。
     * - キャンセル連動設定を利用した、クレジット（イプシロン）決済のキャンセル
     */
    caenceSale: (
      /** 受注ID */
      saleId: number,
      params: ColormeCancelSaleParams
    ) => cancelSale(client, saleId, params),
    /**
     * メールの送信
     * 受注・入金確認・商品発送メールを送ることができます
     */
    sendMail: (
      /** 受注ID */
      saleId: number,
      params: ColormeSendMailParams
    ) => sendMail(client, saleId, params),
  };

  return sales;
};
