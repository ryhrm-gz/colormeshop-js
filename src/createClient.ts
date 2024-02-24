import { ColormeClient } from '.';
import { createAxiosClient } from './apis/axiosClient';
import { createSales } from './apis/sales';
import { createShop } from './apis/shop';
import { createCustomers } from './apis/customers';
import { createProducts } from './apis/products';
import { createStocks } from './apis/stocks';
import { createGroups } from './apis/groups';
import { createCategories } from './apis/categories';
import { creatgePayments } from './apis/payments';
import { createDeliveries } from './apis/deliveries';
import { createGift } from './apis/gift';
import { createCoupons } from './apis/coupons';

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
