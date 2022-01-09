import api from "./api/rest.api.js";

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

     async category() {
          try {
               var coins = await api.post(`/${this.config.pathModel}/${this.config.apiVersion}/calendar/category`, {}, {
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