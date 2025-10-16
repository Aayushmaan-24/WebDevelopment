import { getStockData } from './DummyAPI.js';

setInterval(() => {
    const stockData = getStockData();
    renderStockData(stockData);
}, 1000);

let previousPrice = null;

function renderStockData(data) {
    const StockDisplayName = document.getElementById('name');
    const StockDisplayPrice = document.getElementById('price');
    const StockDisplaySymbol = document.getElementById('symbol');
    const StockDisplayPriceIcon = document.getElementById('price-icon');
    const StockDisplayTime = document.getElementById('time');

    const { name, sym, price, time } = data;

    const PriceIndicator = price > previousPrice ? '🔺' : price < previousPrice ? '🔻' : '⏺️';
    StockDisplayPriceIcon.innerText = PriceIndicator;
    previousPrice = price;

    StockDisplayName.innerText = `Name: ${name}`;
    StockDisplaySymbol.innerText = `Symbol: ${sym}`;
    StockDisplayPrice.innerText = `Price: $${price}`;
    StockDisplayTime.innerText = `Time: ${time}`;

    
}
