const axios = require("axios").default;
import {
  ColormeCancelSaleParams,
  ColormeClient,
  ColormeGetCustomersParams,
  ColormeGetProductsParams,
  ColormeGetSalesParams,
  ColormeGetStatParams,
  ColormeGetStocksParams,
  ColormeSendMailParams,
  ColormeUpdateSaleParams,
} from ".";
import { getShop } from "./lib/shop/getShop";
import { getSales } from "./lib/sales/getSales";
import { getStat } from "./lib/sales/getStat";
import { getSale } from "./lib/sales/getSale";
import { getCustomers } from "./lib/customers/getCustomers";
import { getCustomer } from "./lib/customers/getCustomer";
import { getProducts } from "./lib/products/getProducts";
import { getProduct } from "./lib/products/getProduct";
import { getStocks } from "./lib/stocks/getStocks";
import { getGroups } from "./lib/groups/getGroups";
import { getCategories } from "./lib/categories/getCategories";
import { getPayments } from "./lib/payments/getPayments";
import { getDeliveries } from "./lib/deliveries/getDeliveries";
import { getGift } from "./lib/gift/getGift";
import { getCoupons } from "./lib/coupons/getCoupons";
import { getCoupon } from "./lib/coupons/getCoupon";
import { updateSale } from "./lib/sales/updateSale";
import { cancelSale } from "./lib/sales/cancelSale";
import { sendMail } from "./lib/sales/sendMail";

export const createClient = ({ accessToken }: ColormeClient) => {
  if (!accessToken) {
    throw {
      message: "Access token is required",
    };
  }
  const client = axios.create({
    baseURL: "https://api.shop-pro.jp/v1/",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const shop = {
    /**
     * ショップ情報の取得
     * ショップ名などの基本的な情報を取得することができるAPIです。
     */
    getShop: () => getShop(client),
  };
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
  const customers = {
    /** 顧客データのリストを取得 */
    getCustomers: (params?: ColormeGetCustomersParams) =>
      getCustomers(client, params),
    /** 顧客データの取得 */
    getCustomer: (
      /** 顧客ID */
      customerId: number
    ) => getCustomer(client, customerId),
  };
  const products = {
    /** 商品一覧の取得 */
    getProducts: (params?: ColormeGetProductsParams) =>
      getProducts(client, params),
    /** 商品データの取得 */
    getProduct: (
      /** 商品ID */
      productId: number
    ) => getProduct(client, productId),
  };
  const stocks = {
    /**
     * 在庫情報の取得
     * 在庫情報を商品名や型番で検索できるAPIです。
     */
    getStocks: (params?: ColormeGetStocksParams) => getStocks(client, params),
  };
  const groups = {
    /** 商品グループ一覧を取得 */
    getGroups: () => getGroups(client),
  };
  const categories = {
    /** 商品カテゴリー一覧を取得 */
    getCategories: () => getCategories(client),
  };
  const payments = {
    /** 決済設定の一覧を取得 */
    getPayments: () => getPayments(client),
  };
  const deliveries = {
    /** 配送方法一覧を取得 */
    getDeliveries: () => getDeliveries(client),
  };
  const gift = {
    /** ギフト設定を取得 */
    getGift: () => getGift(client),
  };
  const coupons = {
    /** ショップクーポン一覧取得 */
    getCoupons: () => getCoupons(client),
    /** ショップクーポンの取得 */
    getCoupon: (
      /** クーポンID */
      coponId: number
    ) => getCoupon(client, coponId),
  };

  return {
    /** ショップ */
    shop,
    /** 受注 */
    sales,
    /** 顧客 */
    customers,
    /** 商品 */
    products,
    /** 在庫 */
    stocks,
    /** 商品グループ */
    groups,
    /** 商品カテゴリー */
    categories,
    /** 決済 */
    payments,
    /** 配送 */
    deliveries,
    /** ギフト */
    gift,
    /** ショップクーポン */
    coupons,
  };
};
