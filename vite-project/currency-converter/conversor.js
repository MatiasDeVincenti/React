// src/CurrencyConverter.js

import React, { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/768376d166d7af1a884fb63d/latest/${fromCurrency}`
      );

      if (response.status === 200) {
        const conversionRate = response.data.conversion_rates[toCurrency];
        setResult((amount * conversionRate).toFixed(2));
        setError(null);
      } else {
        setError(`Error: ${response.status}`);
        setResult(null);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
      setResult(null);
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    convertCurrency();
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={handleAmountChange} />
        </div>
        <div>
          <label>From Currency:</label>
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
        <div>
          <label>To Currency:</label>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
        <button type="submit">Convert</button>
      </form>
      {result && (
        <p>
          {amount} {fromCurrency} = {result} {toCurrency}
        </p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CurrencyConverter;
