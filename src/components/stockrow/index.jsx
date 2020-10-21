import React, { Component } from 'react'
import { stock } from '../../resources/stock'

require('dotenv').config()


class StockRow extends Component {
    constructor(props){
        super(props)
        this.state = {
           data: {}
        }
    }
    applyData(data) {
        this.setState({
            data: data
        })
    }

    componentDidMount() {
            stock.latestPrice(this.props.ticker, this.applyData.bind(this))
            
    }

    render() {
        console.log(this.state.data);
        const { ticker } = this.props
        const { price, date, time } = this.state.data
        return (
            <tr>
                <td>{ticker}</td>
                <td>{price}</td>
                <td>{date}</td>
                <td>{time}</td>
            </tr>
        )
    }
}

export default StockRow