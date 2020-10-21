import { iex } from '../config/iex'
require('dotenv').config()


export const stock = {
    latestPrice: (ticker, callback) => {
        const url = stock.latestPriceUrl(ticker)
        fetch(url)
        .then((res) => res.json())
        .then((data) => callback(stock.formatPriceData(data))
    )
    },
    latestPriceUrl: (ticker) => {
        return `${iex.baseUrl}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.my_token}`
    },
    formatPriceData: (data) => {
        const stockData = data[data.length - 1]
        const formattedData = {}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        return formattedData
    }
}