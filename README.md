# JavaScript client for ColorMeShop API
[![npm](https://img.shields.io/npm/l/colormeshop-js)](https://www.npmjs.com/package/colormeshop-js)
[![npm](https://img.shields.io/npm/v/colormeshop-js)](https://www.npmjs.com/package/colormeshop-js)
[![npm](https://img.shields.io/npm/dt/colormeshop-js)](https://www.npmjs.com/package/colormeshop-js)

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
