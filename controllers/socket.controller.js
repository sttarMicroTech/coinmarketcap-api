import { WebSocket } from "ws";
import headersControllers from "./headers.controllers.js";


function socketController(criptoId = [], callback) {
     var send = { 
          "method": "subscribe",
          "id": "price",
          "data": { 
               "cryptoIds": criptoId,
               "index": null 
          } 
     }

     const ws = new WebSocket('wss://stream.coinmarketcap.com/price/latest', {
          headers: headersControllers
     });
     ws.on('open', () => {
          console.log('open connection')
          ws.send(JSON.stringify(send))
          ws.on('message', message => {
               var stream = message.toString()
               callback(JSON.parse(stream))
          })
     })
}

export default socketController;