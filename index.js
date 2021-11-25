const WebSocket = require('ws')
const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethbusd@kline_1h');

ws.onmessage = (event) => {
    const data = JSON.parse(event.data)
    const valor = parseFloat(data.k.c)
    console.log('Valor Atual:'+ valor)

    if (valor > 4499)
    console.log('Vender!' + valor);
    else if (valor <= 4478)
console.log('Comprar'+ valor)

}

console.log('Conectado')
