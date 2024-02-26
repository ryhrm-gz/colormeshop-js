# JavaScript client for ColorMeShop API

[![npm](https://img.shields.io/npm/l/colormeshop-js)](https://www.npmjs.com/package/colormeshop-js)
[![npm](https://img.shields.io/npm/v/colormeshop-js)](https://www.npmjs.com/package/colormeshop-js)
[![npm](https://img.shields.io/npm/dm/colormeshop-js)](https://www.npmjs.com/package/colormeshop-js)

ColormeShop API Document: https://developer.shop-pro.jp/docs/colorme-api

## How to use

```javascript
import { getProducts, initializeClient } from 'colormeshop-js';

const client = initializeClient('your-api-key', {
  overrideBaseUrl?: 'https://xxx.xxx.xxx.xxx',
});

const { data, error } = await getProducts(client,{
  limit: 10,
  offset: 0
});
```
