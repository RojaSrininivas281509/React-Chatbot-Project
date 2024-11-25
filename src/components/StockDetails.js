import React from 'react';

const StockDetails = ({ stock, price, onBack }) => {
  return (
    <div>
      <h2>{stock.stockName}</h2>
      <p>Current Price: ${price}</p>
      <button onClick={onBack}>Back to Stocks</button>
    </div>
  );
};

export default StockDetails;
