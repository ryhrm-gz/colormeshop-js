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
});
