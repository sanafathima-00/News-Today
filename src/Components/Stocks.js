import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const stockNames = {
  AMZN: 'Amazon',
  GOLD: 'Gold',
  TSLA: 'Tesla',
  MSFT: 'Microsoft',
  NVDA: 'Nvidia',
};

const Stocks = ({ stockSymbols = ['AMZN', 'GOLD', 'TSLA', 'MSFT', 'NVDA'] }) => {
  const [stockData, setStockData] = useState({});
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_STOCKS_API_KEY; // Replace with actual API key

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      const newStockData = {}; // ✅ Use a local object to store multiple stock data

      for (const symbol of stockSymbols) {
        try {
          const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
          const response = await fetch(url);
          const result = await response.json();

          if (result['Time Series (5min)']) {
            const timeSeries = result['Time Series (5min)'];
            const labels = Object.keys(timeSeries).slice(0, 10).reverse();
            const prices = labels.map((time) => parseFloat(timeSeries[time]['4. close']));

            newStockData[symbol] = { labels, prices };
          }
        } catch (error) {
          console.error(`Error fetching stock data for ${symbol}:`, error);
        }
      }

      setStockData(newStockData); // ✅ Update state once after fetching all stocks
      setLoading(false);
    };

    fetchStockData();
  }, [stockSymbols]); // ✅ Ensure this runs when stockSymbols change

  return (
    <div className="stocks-section">
      <h3>Stock Trends</h3>
      {loading ? (
        <p>Loading stock data...</p>
      ) : (
        stockSymbols.map((symbol) => (
          <div key={symbol} className="stock-section">
            <div className="stock-info">
              <p className="stock-name">{stockNames[symbol]}</p>
              <p className="stock-symbol">{symbol}</p>
            </div>
            <div className="stock-graph">
              {stockData[symbol] ? (
                <Line
                  data={{
                    labels: stockData[symbol].labels,
                    datasets: [
                      {
                        data: stockData[symbol].prices,
                        borderColor: 'green',
                        borderWidth: 2,
                        fill: false,
                        pointRadius: 0.1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      x: { display: false },
                      y: { display: false },
                    },
                  }}
                />
              ) : (
                <p>Data not available</p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Stocks;
