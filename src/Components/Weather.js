import React, { Component } from 'react';
import './News.css';

export class Weather extends Component {
    // Map Visual Crossing API icon names to actual image URLs
    getWeatherIcon = (iconName) => {
        const iconMap = {
            "clear-day": "https://cdn.weatherapi.com/weather/64x64/day/113.png",
            "clear-night": "https://cdn.weatherapi.com/weather/64x64/night/113.png",
            "partly-cloudy-day": "https://cdn.weatherapi.com/weather/64x64/day/116.png",
            "partly-cloudy-night": "https://cdn.weatherapi.com/weather/64x64/night/116.png",
            "cloudy": "https://cdn.weatherapi.com/weather/64x64/day/119.png",
            "rain": "https://cdn.weatherapi.com/weather/64x64/day/296.png",
            "sleet": "https://cdn.weatherapi.com/weather/64x64/day/368.png",
            "snow": "https://cdn.weatherapi.com/weather/64x64/day/338.png",
            "wind": "https://cdn.weatherapi.com/weather/64x64/day/176.png",
        };

        return iconMap[iconName] || "https://www.visualcrossing.com/img/icons/weather/default.png"; // Default icon
    };

    render() {
        const { weatherData } = this.props;

        return (
            <div className="weather-section">
                <h3>Weather</h3>
                {weatherData ? (
                    <>
                        {/* ✅ Weather Icon with Border */}
                        <div className="weather-icon-container">
                            <img
                                src={this.getWeatherIcon(weatherData.icon)}
                                alt={weatherData.condition}
                                className="weather-icon"
                            />
                        </div>
                        <p className="weather-condition">{weatherData.condition}</p>
                        <p className="weather-temp">{weatherData.temp}°F</p>
                        {/* <p className="weather-description">{weatherData.description}</p> */}
                        {/* ✅ Weather Data in Table */}
                        <table className="weather-table">
                            <tbody>
                                <tr>
                                    <td>Humidity</td>
                                    <td>{weatherData.humidity}%</td>
                                </tr>
                                <tr>
                                    <td>Precipitation</td>
                                    <td>{weatherData.precip} mm</td>
                                </tr>
                                <tr>
                                    <td>Wind</td>
                                    <td>{weatherData.windSpeed} mph ({weatherData.windDirection}°)</td>
                                </tr>
                                <tr>
                                    <td>Solar Radiation</td>
                                    <td>{weatherData.solarRadiation} W/m²</td>
                                </tr>
                                <tr>
                                    <td>UV Index</td>
                                    <td>{weatherData.uvIndex}</td>
                                </tr>
                            </tbody>
                        </table>

                    </>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        );
    }
}

export default Weather;
