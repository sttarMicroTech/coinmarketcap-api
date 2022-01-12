import api from "./api/rest.api.js";
import headersControllers from "./controllers/headers.controllers.js";
import socketController from "./controllers/socket.controller.js";

class marketcap {
     constructor(config = {
          apiVersion: 'v3',
          pathModel: 'data-api',
     }) {
          this.config = config;
     }

     async all() {
          try {
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/map/all`);
               return coins.data;
          } catch (error) {
               return error;
          }
     }

     realTime(criptoIds = [
          1, 1027, 825, 1839, 3408, 5426, 2010, 52, 4172, 6636, 5805, 74, 3890, 5994, 4687, 1975, 3635, 3717, 6535, 7129, 7083, 4943, 4030, 2, 3794, 1831, 3513, 1958, 512, 8916, 4195, 1966, 4642, 3077, 4023, 6783, 6210, 2280, 6892, 2416, 1321, 2011, 3957, 3945, 328, 4256, 5665, 1720, 7278, 7186, 1765, 6719, 4847, 3718, 4558, 7080, 5034, 6538, 3602, 4157, 1518, 3155, 2130, 1934, 1437, 5567, 10791, 6945, 7653, 1376, 5632, 1697, 4066, 2087, 5647, 1274, 3897, 131, 2502, 2563, 8646, 2694, 5692, 5864, 2634, 2682, 873, 2577, 2777, 8104, 5604, 3330, 6758, 3822, 7501, 1727, 3801, 1168, 9816, 3640, 9023, 9022, 5824
     ], callback){
          socketController(criptoIds, call => {
               callback(call)
          })
     }

     async category() {
          try {
               var coins = await api.post(`/${this.config.pathModel}/${this.config.apiVersion}/calendar/category`, {}, {headers: headersControllers});
               return coins.data;
          } catch (error) {
               return error;
          }
     }

     async query(payload = {
          "start":0,
          "limit":20,
          "coinType":"all",
          "current":false,
          "coinIds":[1],
          "timeStart":"",
          "timeEnd":""
     }) {
          try {
               if(payload.timeEnd == ''){
                    payload.timeEnd = new Date().toISOString();
               }

               if(payload.timeStart == ''){
                    payload.timeStart = new Date('2021-11-01').toISOString();
               }

               // console.log(payload)
               var coins = await api.post(`/${this.config.pathModel}/${this.config.apiVersion}/calendar/query`, payload, {
                    headers: {
                         accept: 'application/json, text/plain, */*',
                         //'accept-encoding': 'gzip, deflate, br',
                         'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
                         //'content-length': 2,
                         'content-type': 'application/json',
                         //'fvideo-id': '32877c7528719138961e6555e740fd6bcdb284e4',
                         origin: 'https://coinmarketcap.com',
                         referer: 'https://coinmarketcap.com/',
                         //'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
                         //'sec-ch-ua-mobile': '?1',
                         'sec-ch-ua-platform': '"Android"',
                         'sec-fetch-dest': 'empty',
                         'sec-fetch-mode': 'cors',
                         'sec-fetch-site': 'same-site',
                         'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Mobile Safari/537.36',
                         //'x-request-id': 'df106f54-1769-4622-ac50-2a6f919fb7c4'
                    }
               });
               return coins.data;
          } catch (error) {
               return error;
          }
     }

     async historical(coinId = '1', convertId = '2781') {
          try {
               var start = new Date(2013).getTime();
               var end = new Date().getTime();
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/cryptocurrency/historical?id=${coinId}&convertId=${convertId}&timeStart=${start}&timeEnd=${end}`);
               return coins.data;
          } catch (error) {
               return error;
          }
     }

     async coinMap(coin = '') {
          try {
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/map/all`);
               coins = coins.data;
               var arr = [];
               for (var ex of coins.data.cryptoCurrencyMap) {
                    if (coin == ex.name || coin == ex.slug) {
                         ex.criticalStatus = ex.is_active == 1 ? 'coin actived' : 'Inative coin';
                         arr.push(ex)
                    } else if (coin == '') {
                         arr.push(ex)
                    }
               }
               return arr;
          } catch (error) {
               return error;
          }
     }


     async halfYear(cryptoID = 1) {
          try {
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/price-prediction/query/half-year?cryptoId=${cryptoID}`);
               return coins.data;
          } catch (error) {
               return error;
          }

     }

     async chart(coinId = 1, range = '1D') {
          try {
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/cryptocurrency/detail/chart?id=${coinId}&range=${range}`);
               return coins.data;
          } catch (error) {
               return error;
          }
     }

     async marketPairs(slug = '') {
          try {
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/cryptocurrency/market-pairs/latest?slug=${slug}`);
               return coins.data;
          } catch (error) {
               return error;
          }
     }

     async rank() {
          try {
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/topsearch/rank`);
               return coins.data.data.cryptoTopSearchRanks;
          } catch (error) {
               return error;
          }
     }

     async exchangeMap(exchange = '') {
          try {
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/map/all`);
               coins = coins.data;
               var arr = [];
               for (var ex of coins.data.exchangeMap) {
                    if (exchange == ex.name || exchange == ex.slug) {
                         ex.criticalStatus = ex.is_active == 1 ? 'exchange actived' : 'Inative Exchange';
                         arr.push(ex)
                    } else if (exchange == '') {
                         arr.push(ex)
                    }
               }
               return arr;
          } catch (error) {
               return error;
          }
     }
}

export default marketcap;