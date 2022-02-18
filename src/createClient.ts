import { ColormeClient } from ".";
import { createAxiosClient } from "./lib/axiosClient";
import { createSales } from "./lib/sales";
import { createShop } from "./lib/shop";
import { createCustomers } from "./lib/customers";
import { createProducts } from "./lib/products";
import { createStocks } from "./lib/stocks";
import { createGroups } from "./lib/groups";
import { createCategories } from "./lib/categories";
import { creatgePayments } from "./lib/payments";
import { createDeliveries } from "./lib/deliveries";
import { createGift } from "./lib/gift";
import { createCoupons } from "./lib/coupons";

export const createClient = ({ accessToken }: ColormeClient) => {
  const client = createAxiosClient({ accessToken });

  const shop = createShop(client);
  const sales = createSales(client);
  const customers = createCustomers(client);
  const products = createProducts(client);
  const stocks = createStocks(client);
  const groups = createGroups(client);
  const categories = createCategories(client);
  const payments = creatgePayments(client);
  const deliveries = createDeliveries(client);
  const gift = createGift(client);
  const coupons = createCoupons(client);

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
