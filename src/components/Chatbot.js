import React from 'react';
import HomeMenu from './HomeMenu';
import StockMenu from './StockMenu';
import StockDetails from './StockDetails';

const Chatbot = ({
  stockData,
  selectedExchange,
  selectedStock,
  setSelectedExchange,
  setSelectedStock
}) => {
  if (!stockData || stockData.length === 0) {
    return <div>Loading...</div>;
  }

  // Home Menu
  if (!selectedExchange) {
    return (
      <HomeMenu
        stockExchanges={stockData}
        onSelectExchange={setSelectedExchange}
      />
    );
  }

  // Stock Menu for selected exchange
  if (!selectedStock) {
    return (
      <StockMenu
        stocks={selectedExchange.topStocks}
        onSelectStock={setSelectedStock}
        onBack={() => setSelectedExchange(null)}
      />
    );
  }

  // Stock Details for selected stock
  return (
    <StockDetails
      stock={selectedStock}
      price={selectedStock.price}
      onBack={() => setSelectedStock(null)}
    />
  );
};

export default Chatbot;
