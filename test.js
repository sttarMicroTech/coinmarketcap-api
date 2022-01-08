import marketcap from "./index.js";

var coin = new marketcap();

(async () => {
     // var coins = await coin.all()
     // var coins = await coin.exchangeMap('binance')
     var coins = await coin.coinMap('bitcoin')
     console.log(coins)
})();

