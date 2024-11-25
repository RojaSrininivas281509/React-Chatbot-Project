import React from 'react';

const HomeMenu = ({ stockExchanges, onSelectExchange }) => {
  return (
    <div>
      <h2>Choose a Stock Exchange:</h2>
      {stockExchanges.map(exchange => (
        <button key={exchange.code} onClick={() => onSelectExchange(exchange)}>
          {exchange.stockExchange}
        </button>
      ))}
    </div>
  );
};

export default HomeMenu;
