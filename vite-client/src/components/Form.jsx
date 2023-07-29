import React, { useState } from "react";
import axios from 'axios';

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px",
};

const labelStyle = {
  fontWeight: "bold",
  margin: "10px",
};

const inputStyle = {
  width: "200px",
  padding: "5px",
  border: "1px solid black",
  borderRadius: "5px",
};

const selectStyle = {
  width: "100px",
  padding: "5px",
  border: "1px solid black",
  borderRadius: "5px",
};

const buttonStyle = {
  width: "100px",
  padding: "10px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  margin: "20px",
};

const Form = ({ setData }) => {
  const [symbol, setSymbol] = useState("");
  const [date, setDate] = useState("");
  const [adjusted, setAdjusted] = useState(true);

  const headers = {};
  headers['Content-Type'] = 'application/json;charset=UTF-8';
  headers['Access-Control-Allow-Origin'] = "*";


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        date: date,
        stock: symbol,
        adjusted: adjusted
      }
      const API_URL = "http://localhost:5000/api/fetchStockData";
      const response = await axios.post(API_URL,  payload, headers );
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.error(error.message);
      setData({})
      setTimeout(() => {
        alert(error.message);
      }, 500)
    }
  };

  return (
    <div className="stock-form">
      <h1 style={formStyle}>Stock Form</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="symbol" style={labelStyle}>
          Symbol:
        </label>
        <input
          type="text"
          id="symbol"
          name="symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="AAPL"
          required
          style={inputStyle}
        />
        <label htmlFor="date" style={labelStyle}>
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={inputStyle}
        />
        <label htmlFor="adjusted" style={labelStyle}>
          Adjusted:
        </label>
        <select
          id="adjusted"
          name="adjusted"
          value={adjusted}
          onChange={(e) => setAdjusted(e.target.value)}
          style={selectStyle}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
