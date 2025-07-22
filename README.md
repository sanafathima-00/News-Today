# 📰 News Today - All-in-One News Dashboard



## 📋 Project Overview

**News Today** is a dynamic and responsive news dashboard that brings together real-time top headlines, weather updates, and stock market data in one convenient interface. Built with ReactJS, it leverages various public APIs to ensure live, category-wise updates for users.

---

## ✨ Features

* 🗞️ Top news headlines fetched from major news APIs
* 🌦️ Live weather updates based on geolocation or search
* 📈 Real-time stock market insights
* 🔍 Category-based browsing: Sports, Tech, Health, etc.
* 📱 Responsive design for mobile and desktop
* 🔄 Auto-refreshing data with minimal lag

---

## 🛠️ Tech Stack

| Layer    | Technology                             |
| -------- | -------------------------------------- |
| Frontend | ReactJS                                |
| Styling  | CSS / Tailwind CSS                     |
| APIs     | NewsAPI, OpenWeatherMap, Alpha Vantage |
| State    | React Hooks / Context                  |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/news-today.git
cd news-today
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Keys

Create a `.env` file in the root and add:

```
REACT_APP_NEWS_API=your_api_key
REACT_APP_WEATHER_API=your_api_key
REACT_APP_STOCK_API=your_api_key
```

### 4. Start the App

```bash
npm start
```

---

## 📁 Project Structure

```
news-today/
│
├── public/
|   ├── .ico files
│   └── index.html
├── src/
│   ├── components/
|      ├── NavBar.css
|      ├── NavBar.js
|      ├── News Today Design.png
|      ├── News.css
|      ├── News.js
|      ├── Newsltem.css
|      ├── Newsltems.js
|      ├── Stocks.js
|      ├── TopNews.css
|      ├── TopNews.js
|      ├── Weather.js
|      ├── logo.jpg
|      └── top.png
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── logo.svg
├── .env
├── package.json
└── README.md
```

---

## 🧠 Learning Outcomes

* Improved ReactJS component architecture
* Hands-on experience with REST APIs and async data fetching
* Skill development in API key management and data formatting
* Better UI/UX design thinking with real-world data

---

## 📄 License

Licensed under the **MIT License**.

---

## 🙌 Acknowledgments

* [NewsAPI](https://newsapi.org/) for headline data
* [OpenWeatherMap](https://openweathermap.org/) for weather updates
* [Alpha Vantage](https://www.alphavantage.co/) for stock market data
