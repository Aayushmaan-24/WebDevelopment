function getStockData() {
    return {
        name : "Qtech AI",
        sym : "QTA",
        price: (Math.random() * 3).toFixed(2), //random number between 0 and 3 upto 2 decimal places
        time: new Date().toLocaleTimeString()
    }
}

export { getStockData };