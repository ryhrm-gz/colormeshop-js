const axios = require("axios").default;
import {
  ColormeClient,
  ColormeGetCouponParams,
  ColormeGetCustomerParams,
  ColormeGetCustomersParams,
  ColormeGetProductParams,
  ColormeGetProductsParams,
  ColormeGetSaleParams,
  ColormeGetSalesParams,
  ColormeGetStatParams,
  ColormeGetStocksParams,
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
    getSale: (params: ColormeGetSaleParams) => getSale(client, params),
    /**
     * 受注データの更新
     * 該当受注の決済がAmazon Pay、LINE Pay、または楽天ペイ（オンライン決済）である場合は、熨斗・メッセージカード・ラッピングの手数料を更新すると、決済金額が自動的に購入者に請求もしくは返金されます。
     *
     * ただし、LINE Payの場合は、決済金額の変更は減額のみ行うことができます。
     */
    updateSale: (saleId: number, params: { sale: ColormeUpdateSaleParams }) =>
      updateSale(client, saleId, params),
  };
  const customers = {
    /** 顧客データのリストを取得 */
    getCustomers: (params?: ColormeGetCustomersParams) =>
      getCustomers(client, params),
    /** 顧客データの取得 */
    getCustomer: (params: ColormeGetCustomerParams) =>
      getCustomer(client, params),
  };
  const products = {
    /** 商品一覧の取得 */
    getProducts: (params?: ColormeGetProductsParams) =>
      getProducts(client, params),
    /** 商品データの取得 */
    getProduct: (params: ColormeGetProductParams) => getProduct(client, params),
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
    getCoupon: (params: ColormeGetCouponParams) => getCoupon(client, params),
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
