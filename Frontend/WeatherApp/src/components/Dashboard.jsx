import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
    const API_KEY = "eb8b24d7d6f6c88f7289d9cb858c5594";
    const [city, setCity] = useState("Delhi");
    const [weather, setWeather] = useState(null);

    // Ask user for city name on first load
    useEffect(() => {
        const userCity = prompt("Enter a city name:");
        if (userCity) setCity(userCity);
    }, []);

    // Fetch weather data whenever city changes
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setWeather(data);
            })
            .catch(err => console.log(err.message));
    }, [city]);

    return (
        <div className="dashboard-container">
            <h2 className="city-name">Weather in {city}</h2>

            {weather ? (
                weather.cod === 200 ? (
                    <div className="weather-card">
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt="weather icon"
                            className="weather-icon"
                        />
                        <h3 className="weather-main">{weather.weather[0].main}</h3>
                        <p className="temperature">
                            🌡️ Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C
                        </p>
                        <p>Feels Like: {(weather.main.feels_like - 273.15).toFixed(2)} °C</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Wind Speed: {weather.wind.speed} m/s</p>
                        <p>Pressure: {weather.main.pressure} hPa</p>
                    </div>
                ) : (
                    <p className="error-msg">❌ City not found. Please refresh and try again.</p>
                )
            ) : (
                <p className="loading-msg">Loading weather data...</p>
            )}
        </div>
    );
}

export default Dashboard;
