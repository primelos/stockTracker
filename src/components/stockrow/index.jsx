import React, { Component } from 'react'
import { iex } from '../../config/iex'
require('dotenv').config()


class StockRow extends Component {
    constructor(props){
        super(props)
        this.state = {
           data: {}
        }
    }

    componentDidMount() {
        const url = `${iex.baseUrl}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.my_token}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    data: data
                })
        })
    }

    render() {
        // console.log(iex.my_token);
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