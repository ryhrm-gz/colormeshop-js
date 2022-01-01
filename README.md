# JavaScript client for ColorMeShop API

ColormeShop API Document: https://developer.shop-pro.jp/docs/colorme-api

## Getting Started

### Install

```bash
npm install colormeshop-js
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
const client = createClient({ accessToken: "Your Access token" });
```
