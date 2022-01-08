import api from "./api/rest.api.js";

class marketcap{
     constructor(config = {
          apiVersion: 'v3',
          pathModel: 'data-api',
     }){
          this.config = config;
     }

     async all(){
          try {
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/map/all`);
               return coins.data;
          } catch (error) {
               return error;
          }
     }

     async coinMap(coin = ''){
          try {
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/map/all`);
               coins = coins.data;
               var arr = [];
               for(var ex of coins.data.cryptoCurrencyMap){
                    if(coin == ex.name || coin == ex.slug){
                         ex.criticalStatus = ex.is_active == 1 ? 'coin actived' : 'Inative coin';
                         arr.push(ex)
                    }else if(coin == ''){
                         arr.push(ex)
                    }
               }
               return arr;
          } catch (error) {
               return error;
          }
     }

     async exchangeMap(exchange = ''){
          try {
               var coins = await api.get(`/${this.config.pathModel}/${this.config.apiVersion}/map/all`);
               coins = coins.data;
               var arr = [];
               for(var ex of coins.data.exchangeMap){
                    if(exchange == ex.name || exchange == ex.slug){
                         ex.criticalStatus = ex.is_active == 1 ? 'exchange actived' : 'Inative Exchange';
                         arr.push(ex)
                    }else if(exchange == ''){
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