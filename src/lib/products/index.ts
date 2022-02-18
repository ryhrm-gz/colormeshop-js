import { AxiosInstance } from "axios";
import {
  ColormeAddPickupParams,
  ColormeAddProductParams,
  ColormeDeletePickupParams,
  ColormeGetProductsParams,
  ColormeUpdateProductParams,
} from "../..";
import { addPickup } from "./addPickup";
import { addProduct } from "./addProduct";
import { deletePickup } from "./deletePickup";
import { getProduct } from "./getProduct";
import { getProducts } from "./getProducts";
import { updateProduct } from "./updateProduct";

export const createProducts = (client: AxiosInstance) => {
  const products = {
    /** 商品一覧の取得 */
    getProducts: (params?: ColormeGetProductsParams) =>
      getProducts(client, params),
    /** 商品データの取得 */
    getProduct: (
      /** 商品ID */
      productId: number
    ) => getProduct(client, productId),
    /** 商品データの追加 */
    addProduct: (params: ColormeAddProductParams) => addProduct(client, params),
    /** 商品データの更新 */
    updateProduct: (
      /** 商品ID */
      productId: number,
      params: ColormeUpdateProductParams
    ) => updateProduct(client, productId, params),
    /**
     * おすすめ商品情報の追加
     * おすすめ商品情報(おすすめ商品、売れ筋商品、新着商品、イチオシ商品のいずれか)を商品に追加します。
     */
    addPickup: (
      /** 商品ID */
      productId: number,
      params: ColormeAddPickupParams
    ) => addPickup(client, productId, params),
    /**
     * おすすめ商品情報の削除
     * 商品に付加されたおすすめ商品情報を削除します
     */
    deletePickup: (params: ColormeDeletePickupParams) =>
      deletePickup(client, params),
  };

  return products;
};
