import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chatbot from './components/Chatbot';
import './styles/styles.css';

const App = () => {
  const [stockData, setStockData] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  // Load stock data from the JSON file
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('../public/data/stock_Data.json'); // Adjust the path based on your project structure
        setStockData(response.data);
      } catch (error) {
        console.error("Error loading stock data:", error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="App">
      <h1>Stock Chatbot</h1>
      <Chatbot
        stockData={stockData}
        selectedExchange={selectedExchange}
        selectedStock={selectedStock}
        setSelectedExchange={setSelectedExchange}
        setSelectedStock={setSelectedStock}
      />
    </div>
  );
};

export default App;
