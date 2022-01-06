import { describe, test } from "vitest";
require("dotenv").config();
import { createClient } from "../src/index";

const accessToken = process.env.COLORME_ACCESS_TOKEN;

describe("createClient", () => {
  const client = createClient({ accessToken });
  //getShop
  test.skip("getShop", async () => {
    try {
      await client.shop.getShop();
    } catch (error) {
      console.log(error.error);
    }
  });
  //getSales
  test.skip("getSales", async () => {
    try {
      await client.sales.getSales();
    } catch (error) {
      console.log(error);
    }
  });
  //getStat
  test.skip("getStat", async () => {
    try {
      await client.sales.getStat();
    } catch (error) {
      console.log(error);
    }
  });
  //getSale
  test.skip("getSale", async () => {
    try {
      await client.sales.getSale({ sale_id: 1 });
    } catch (error) {
      console.log(error);
    }
  });
  //getCustomers
  test.skip("getCustomers", async () => {
    try {
      console.log(await client.customers.getCustomers());
    } catch (error) {
      console.log(error);
    }
  });
  //getCustomer
  test.skip("getCustomer", async () => {
    try {
      console.log(await client.customers.getCustomer({ customer_id: 1 }));
    } catch (error) {
      console.log(error);
    }
  });
  //getProducts
  test.skip("getProducts", async () => {
    try {
      console.log(await client.products.getProducts());
    } catch (error) {
      console.log(error);
    }
  });
  //getProduct
  test.skip("getProduct", async () => {
    try {
      console.log(await client.products.getProduct({ product_id: 1 }));
    } catch (error) {
      console.log(error);
    }
  });
  //getStocks
  test.skip("getStocks", async () => {
    try {
      console.log(await client.stocks.getStocks());
    } catch (error) {
      console.log(error);
    }
  });
  //getGroups
  test.skip("getGroups", async () => {
    try {
      console.log(await client.groups.getGroups());
    } catch (error) {
      console.log(error);
    }
  });
  //getCategories
  test.skip("getCategories", async () => {
    try {
      console.log(await client.categories.getCategories());
    } catch (error) {
      console.log(error);
    }
  });
  //getPayments
  test.skip("getPayments", async () => {
    try {
      console.log(await client.payments.getPayments());
    } catch (error) {
      console.log(error);
    }
  });
  //getDeliveries
  test.skip("getDeliveries", async () => {
    try {
      console.log(await client.deliveries.getDeliveries());
    } catch (error) {
      console.log(error);
    }
  });
  //getGift
  test.skip("getGift", async () => {
    try {
      console.log(await client.gift.getGift());
    } catch (error) {
      console.log(error);
    }
  });
  //getCoupons
  test("getCoupons", async () => {
    try {
      console.log(await client.coupons.getCoupons());
    } catch (error) {
      console.log(error);
    }
  });
});
