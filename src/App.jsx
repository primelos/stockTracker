import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import StockRow from './components/stockrow'

const changeStyle = {
  color: '#45caf50',
  fontSize: '0.8rem',
  marginLeft: '5px'
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-md-5 mt-5">
          <div className="card">
            
              <ul className='list-group list-group-flush'>
                <li className="list-group-item"><b>AAPL</b> $456.78<span className='change' style={changeStyle}>+12.34 (5.3%)</span></li>
                <li className="list-group-item">AAPL</li>
                <li className="list-group-item">AAPL</li>
                <li className="list-group-item">AAPL</li>
              </ul>
           
          </div>
        </div>
        {/* <table className="table mt-5">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
           <StockRow ticker='aapl' />
           <StockRow ticker='goog' />
           <StockRow ticker='msft' />
           <StockRow ticker='tsla' />

          </tbody>
        </table> */}
      </div>
    </div>
  );
}

export default App;
