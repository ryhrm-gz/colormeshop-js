import { operations } from './generated/types.gen';

export type ColormeShopResponse = Required<
  operations['getShop']['responses']['200']['content']['application/json']
>;

export type ColormeGetSalesQuery = NonNullable<
  operations['getSales']['parameters']['query']
>;

export type ColormeSalesResponse = Required<
  operations['getSales']['responses']['200']['content']['application/json']
>;

export type ColormeStatSaleQuery = NonNullable<
  operations['statSale']['parameters']['query']
>;

export type ColormeStatSaleResponse = Required<
  operations['statSale']['responses']['200']['content']['application/json']
>;

export type ColormeSaleResponse = Required<
  operations['getSale']['responses']['200']['content']['application/json']
>;

export type ColormeUpdateSaleRequestBody = Required<
  NonNullable<
    operations['updateSale']['requestBody']
  >['content']['application/json']
>;

export type ColormeCancelSaleRequestBody = Required<
  NonNullable<
    operations['cancelSale']['requestBody']
  >['content']['application/json']
>;

export type ColormeSendSalesMailRequestBody = Required<
  NonNullable<
    operations['sendSalesMail']['requestBody']
  >['content']['application/json']
>;

export type ColormeGetCustomersQuery = NonNullable<
  operations['getCustomers']['parameters']['query']
>;

export type ColormeCustomersResponse = Required<
  operations['getCustomers']['responses']['200']['content']['application/json']
>;

export type ColormePostCustomerRequestBody = Required<
  NonNullable<
    operations['postCustomers']['requestBody']
  >['content']['application/json']
>;

export type ColormeCustomerResponse = Required<
  operations['getCustomer']['responses']['200']['content']['application/json']
>;

export type ColormeGetProductsQuery = NonNullable<
  operations['getProducts']['parameters']['query']
>;

export type ColormeProductsResponse = Required<
  operations['getProducts']['responses']['200']['content']['application/json']
>;

export type ColormePostProductRequestBody = Required<
  NonNullable<
    operations['postProducts']['requestBody']
  >['content']['application/json']
>;

export type ColormeProductResponse = Required<
  operations['getProduct']['responses']['200']['content']['application/json']
>;

export type ColormeUpdateProductRequestBody = Required<
  NonNullable<
    operations['updateProduct']['requestBody']
  >['content']['application/json']
>;

export type ColormeGetProductVariantsQuery = NonNullable<
  operations['getProductVariants']['parameters']['query']
>;

export type ColormeProductVariantsResponse = Required<
  operations['getProductVariants']['responses']['200']['content']['application/json']
>;

export type ColormePostProductPickupRequestBody = NonNullable<
  operations['postProductPickup']['requestBody']
>['content']['application/json'];

export type ColormePutProductPickupRequestBody = NonNullable<
  operations['putProductPickup']['requestBody']
>['content']['application/json'];

export type ColormeProductPickupResponse = Required<
  operations['putProductPickup']['responses']['200']['content']['application/json']
>;

export type ColormeGetStocksQuery = NonNullable<
  operations['getStocks']['parameters']['query']
>;

export type ColormeStocksResponse = Required<
  operations['getStocks']['responses']['200']['content']['application/json']
>;

export type ColormeProductGroupsResponse = Required<
  operations['getProductGroups']['responses']['200']['content']['application/json']
>;

export type ColormeProductCategoriesResponse = Required<
  operations['getProductCategories']['responses']['200']['content']['application/json']
>;

export type ColormePaymentsResponse = Required<
  operations['getPayments']['responses']['200']['content']['application/json']
>;

export type ColormeDeliveriesResponse = Required<
  operations['getDeliveries']['responses']['200']['content']['application/json']
>;

export type ColormeDeliveryDateSettingResponse = Required<
  operations['getDeliveryDateSetting']['responses']['200']['content']['application/json']
>;

export type ColormeGiftSettingResponse = Required<
  operations['getGift']['responses']['200']['content']['application/json']
>;

export type ColormeShopCouponsResponse = Required<
  operations['getCoupons']['responses']['200']['content']['application/json']
>;

export type ColormeShopCouponResponse = Required<
  operations['getCoupon']['responses']['200']['content']['application/json']
>;

export type ColormeErrorResponse = {
  errors: [
    {
      code: number;
      message: string;
      status: number;
    }
  ];
};
