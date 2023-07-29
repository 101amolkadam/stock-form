// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.enable("trust proxy");

app.post("/api/fetchStockData", async (req, res) => {
  // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION

  const baseUrl = 'https://api.polygon.io'
  const date = req.body?.date;
  const stock = req.body?.stock;
  const adjusted = req.body?.adjusted;

  const url = `${baseUrl}/v1/open-close/${stock}/${date}?adjusted=${adjusted}&apiKey=${process.env.API_KEY}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonData = await response.json();
      res.status(200).json(
        {
          "Open": jsonData.open,
          "Close": jsonData.close,
          "High": jsonData.high,
          "Low": jsonData.low,
          "Volume": jsonData.volume,
        } || {}
      );
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
