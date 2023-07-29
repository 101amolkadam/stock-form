# Stock Form

This is a React application that allows you to fetch and display stock data from [Polygon.io](https://polygon.io/), a platform that provides real-time and historical market data.

## Setup

Before running the application, you need to set up your environment variables.

- Go to the `server` folder and copy the `.env.example` file in the same folder.
- Rename the copied file to `.env`.
- In the `.env` file, replace the placeholder text with your unique API key from [Polygon.io](https://polygon.io/dashboard/api-keys). This key will allow you to access the Polygon.io API.

## Running the application

This application uses [Bun](https://bun.sh/), a fast and secure runtime for JavaScript and TypeScript, instead of Node.js.
To run the application, follow these steps:

- Go to the `server` folder and start the server by running `bun app.js` command. This will launch the server on port 5000.
- Go to the `client` folder and start the React server by running `bun --bun run dev` command. This will launch the client on port 5173.
- Open your browser and navigate to `http://localhost:5173/`. You should see a form where you can enter a stock symbol and a date range to fetch the data. You can also see a chart that shows the historical prices of the selected stock.
