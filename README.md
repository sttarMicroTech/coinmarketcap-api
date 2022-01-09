<center>
     <img src="./assets/coinmarketcap-logo-2.jpg" />
</center>

 ![version](https://img.shields.io/badge/version-1.0-blue) ![enviroment](https://img.shields.io/badge/enviroment-Nodejs-green) ![language](https://img.shields.io/badge/language-Javascript-yellow) 

## Introduction

Api for coinmarketcap, where it is possible to obtain information on daily quotes, Currencies, most quoted pairs and any information provided by CoinMarketcap charts

## Install 

download this repository at the root of your project or use NPM to install this library in your Node project.

```sh
~$ npm install coinmarketcaps-api --save
```

## import

To use this library, it is necessary to import and build it into your project's index file or wherever you want to use it.

```js
import marketcap from "./index.js";

/*
If necessary, you can define the API version you want to use and the data path you want to get.
*/
var coin = new marketcap();

(async () => {
     // var coins = await coin.all()
     // var coins = await coin.exchangeMap('binance')
     // var coins = await coin.coinMap('bitcoin')
     // var coins = await coin.rank();
     // var coins = await coin.halfYear(1);
     // var coins = await coin.historical(2);
     var coins = await coin.query();
     //var coins = await coin.category();
     console.log(coins)
})();

```




### Contact Dev

>- @victorRatts: Telegram
