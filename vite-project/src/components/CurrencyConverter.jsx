import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  useEffect(() => {
    const apiUrl =
      "https://v6.exchangerate-api.com/v6/768376d166d7af1a884fb63d/latest/USD";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setExchangeRates(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []); // Empty dependency array to run effect only once on component mount

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="box">
      {exchangeRates && (
        <div>
          <h1 className="centrartexto">Currency Converter</h1>
          <div className="exchange-rates">
            <h2>Exchange Rates</h2>
            <p>Base Currency: {exchangeRates.base_code}</p>
            <div>
              <label>Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div>
              <label>From Currency:</label>
              <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                {Object.keys(exchangeRates.conversion_rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <p>
              Conversion: {amount} {fromCurrency} ={" "}
              {(amount * exchangeRates.conversion_rates[toCurrency]).toFixed(2)}{" "}
              {toCurrency}
            </p>
            <div>
              <label>To Currency:</label>
              <select value={toCurrency} onChange={handleToCurrencyChange}>
                {Object.keys(exchangeRates.conversion_rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CurrencyConverter;
