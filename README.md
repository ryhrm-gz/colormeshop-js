# JavaScript client for ColorMeShop API

[![npm](https://img.shields.io/npm/l/colormeshop-js)](https://www.npmjs.com/package/colormeshop-js)
[![npm](https://img.shields.io/npm/v/colormeshop-js)](https://www.npmjs.com/package/colormeshop-js)
[![npm](https://img.shields.io/npm/dm/colormeshop-js)](https://www.npmjs.com/package/colormeshop-js)

ColormeShop API Document: https://developer.shop-pro.jp/docs/colorme-api

## Getting Started

### Install

```bash
npm i colormeshop-js
```

or

```bash
yarn add colormeshop-js
```

### How to use

#### 1. Import the library

CommonJS

```javascript
const { createClient } = require("colormeshop-js");
```

ES6

```javascript
import { createClient } from "colormeshop-js";
```

#### 2. Create a Client

```javascript
const client = createClient({ accessToken: "Your access token" });
```

### API

#### client.shop

| name           | params | response                               |
| -------------- | ------ | -------------------------------------- |
| shop.getShop() |        | Promise<{ shop: ColormeShopResponse }> |

#### client.sales

| name                             | params                                            | response                                                             |
| -------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------- |
| sales.getSale(saleId)            | saleId: number                                    | Promise<{<br>sale: ColormeSaleResponse<br>}>                         |
| sales.getSales(params)           | params?: ColormeGetSalesParams                    | Promise<{<br>sales: ColormeSaleResponse[]<br>meta: ColormeMeta<br>}> |
| sales.getStat(params)            | params?: ColormeGetStatParams                     | Promise\<ColormeSalesStatResponse>                                   |
| sales.updateSale(saleId, params) | saleId: number<br>params: ColormeUpdateSaleParams | Promise<{<br>sale: ColormeSaleResponse<br>}>                         |
| sales.cancelSale(saleId, params) | saleId: number<br>params: ColormeCancelSaleParams | Promise<{<br>sale: ColormeSaleResponse<br>}>                         |
| sale.sendMail(saleId, params)    | saleId: number<br>params: ColormeSendMailParams   | Promise\<any>                                                        |

#### client.stocks

| name                     | params                          | response                                                               |
| ------------------------ | ------------------------------- | ---------------------------------------------------------------------- |
| stocks.getStocks(params) | params?: ColormeGetStocksParams | Promise<{<br>stocks: ColormeStockResponse[]<br>meta: ColormeMeta<br>}> |

#### client.products

| name                                      | params                                                  | response                                                                   |
| ----------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------- |
| products.getProducts(params)              | params?: ColormeGetProductsParams                       | Promise<{<br>products: ColormeProductResponse[]<br>meta: ColormeMeta<br>}> |
| products.getProduct(productId)            | productId: number                                       | Promise<{<br>product: ColormeProductResponse<br>}>                         |
| products.addProduct(params)               | params: ColormeAddProductParams                         | Promise<{<br>product: ColormeProductResponse<br>}>                         |
| products.updateProduct(productId, params) | productId: number<br>params: ColormeUpdateProductParams | Promise<{<br>product: ColormeProductResponse<br>}>                         |
| products.addPickup(productId, params)     | productId: number<br>params: ColormeAddPickupParams     | Promise<{<br>pickup: ColormePickupResponse[]<br>}>                         |
| products.deletePickup(params)             | params: ColormeDeletePickupParams                       | Promise<{<br>pickup: ColormePickupResponse[]<br>}>                         |

#### client.groups

| name               | params | response                                          |
| ------------------ | ------ | ------------------------------------------------- |
| groups.getGroups() |        | Promise<{<br>groups: ColormeGroupResponse[]<br>}> |

#### client.categories

| name                       | params | response                                                 |
| -------------------------- | ------ | -------------------------------------------------------- |
| categories.getCategories() |        | Promise<{<br>categories: ColormeCategoryResponse[]<br>}> |

#### client.payments

| name                   | params | response                                              |
| ---------------------- | ------ | ----------------------------------------------------- |
| payments.getPayments() |        | Promise<{<br>payments: ColormePaymentResponse[]<br>}> |

#### client.deliveries

| name                       | params | response                                                 |
| -------------------------- | ------ | -------------------------------------------------------- |
| deliveries.getDeliveries() |        | Promise<{<br>deliveries: ColormeDeliveryResponse[]<br>}> |

#### client.gift

| name           | params | response                                     |
| -------------- | ------ | -------------------------------------------- |
| gift.getGift() |        | Promise<{<br>gift: ColormeGiftResponse<br>}> |

#### client.coupons

| name                        | params           | response                                                 |
| --------------------------- | ---------------- | -------------------------------------------------------- |
| coupons.getCoupon(couponId) | couponId: number | Promise<{<br>shop_coupon: ColormeCouponResponse<br>}>    |
| coupons.getCoupons()        |                  | Promise<{<br>shop_coupons: ColormeCouponResponse[]<br>}> |

### Types

wip
