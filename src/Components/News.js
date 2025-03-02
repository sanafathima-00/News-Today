import React, { Component } from 'react';
import NewsItems from './NewsItems';
import './News.css';
import TopNews from './TopNews';
import Weather from './Weather';
import Stocks from './Stocks';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      weatherData: null,
      loadingNews: false,
      loadingWeather: false,
    };
  }

  async componentDidMount() {
    this.fetchNews();
    this.fetchWeather();
  }

  // Fetch News API
  fetchNews = async () => {
    this.setState({ loadingNews: true });

    let url = `https://newsapi.org/v2/everything?q=everything&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    try {
      let data = await fetch(url);
      let parseData = await data.json();

      console.log(parseData); // Debugging: Check API response

      if (parseData.articles) {
        let filteredArticles = parseData.articles.filter(
          (article) => article.title && article.description && article.urlToImage
        );

        this.setState({ articles: filteredArticles, loadingNews: false });
      } else {
        this.setState({ loadingNews: false });
        console.error('No articles found in API response.');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      this.setState({ loadingNews: false });
    }
  };

  // Fetch Weather API
  fetchWeather = async () => {
    this.setState({ loadingWeather: true });

    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bangalore,IN?key=${process.env.REACT_APP_WEATHER_API_KEY}`;

    try {
      let data = await fetch(url);
      let weatherData = await data.json();

      console.log(weatherData); // Debugging: Check API response

      if (weatherData.days && weatherData.days.length > 0) {
        let todayWeather = weatherData.days[0];

        let formattedWeather = {
          temp: todayWeather.temp,
          humidity: todayWeather.humidity,
          precip: todayWeather.precip,
          condition: todayWeather.conditions,
          icon: todayWeather.icon,
          windSpeed: todayWeather.windspeed,
          windDirection: todayWeather.winddir,
          solarRadiation: todayWeather.solarradiation,
          uvIndex: todayWeather.uvindex,
          description: todayWeather.description,
        };

        this.setState({ weatherData: formattedWeather, loadingWeather: false });
      } else {
        this.setState({ loadingWeather: false });
        console.error('No weather data available.');
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      this.setState({ loadingWeather: false });
    }
  };

  // Function to truncate text based on word count
  truncateWords = (text, maxWords) => {
    const words = text.split(' ');
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
  };

  render() {
    const { articles, weatherData, loadingNews } = this.state;
    const topArticle = articles.length > 0 ? articles[0] : null;

    return (
      <div className="main-container">
        <div className="news-left">
          <Weather weatherData={weatherData} />
        </div>

        <div className="news-center">
          {topArticle && (
            <TopNews
              title={topArticle.title}
              description={topArticle.description}
              imgUrl={topArticle.urlToImage}
              newsurl={topArticle.url}
            />
          )}
        </div>

        <div className="news-right">
          {/* ✅ Pass stock symbols for multiple stocks */}
          <Stocks stockSymbols={['AMZN', 'GOLD', 'TSLA', 'MSFT', 'NVDA']} />
        </div>

        <div className="news-items-container">
          {loadingNews ? (
            <p>Loading News...</p>
          ) : (
            articles.slice(1).map((element) => (
              <NewsItems
                key={element.url}
                title={this.truncateWords(element.title, 10)}
                description={this.truncateWords(element.description, 15)}
                imgUrl={element.urlToImage}
                newsurl={element.url}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default News;
