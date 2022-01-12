import marketcap from "./index.js";

var coin = new marketcap();

(async () => {
     // var coins = await coin.all()
     // var coins = await coin.exchangeMap('binance')
     // var coins = await coin.coinMap('bitcoin')
     // var coins = await coin.rank();
     // var coins = await coin.halfYear(1);
     // var coins = await coin.historical(2);
     // var coins = await coin.query();
     //var coins = await coin.category();
     // console.log(coins)

     coin.realTime([1, 2], call => {
          console.log(call)
     })
})();

