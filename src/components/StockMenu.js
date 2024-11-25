import React from 'react';

const StockMenu = ({ stocks, onSelectStock, onBack }) => {
  return (
    <div>
      <h2>Select a Stock:</h2>
      {stocks.map(stock => (
        <button key={stock.code} onClick={() => onSelectStock(stock)}>
          {stock.stockName}
        </button>
      ))}
      <button onClick={onBack}>Back to Exchange</button>
    </div>
  );
};

export default StockMenu;
