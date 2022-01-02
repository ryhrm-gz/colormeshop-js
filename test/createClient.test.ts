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
      await client.sales.getSale({ sale_id: 151469917 });
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
});
