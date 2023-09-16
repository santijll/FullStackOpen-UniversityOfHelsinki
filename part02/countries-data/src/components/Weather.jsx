/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import WeatherToday from "./WeatherToday";

const weatherStyle = { marginTop: "1rem", lineHeight: "1.8" };

const temperatureTodayStyle = {
  width: "100%",
  fontSize: "2rem",
  margin: "0.75rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

function Weather({ country }) {
  const countryCapital = country[0].capital;
  const [lat, lng] = country[0].latlng;
  const [temperature, setTemperature] = useState("");
  const [weathercode, setWeathercode] = useState("");
  const [temperatureMax, setTemperatureMax] = useState("");
  const [temperatureMin, setTemperatureMin] = useState("");
  const [wind, setWind] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max&current_weather=true&timezone=auto&forecast_days=1`
      );
      const data = await response.json();
      setTemperature(data.current_weather.temperature);
      setTemperatureMax(data.daily.temperature_2m_max);
      setTemperatureMin(data.daily.temperature_2m_min);
      setWind(data.daily.windspeed_10m_max);
      setWeathercode(data.daily.weathercode);
      console.log(data);
    };
    getWeather();
  }, [lat, lng]);

  return (
    <div style={weatherStyle}>
      <h2>Weather in {countryCapital} today</h2>
      <div style={temperatureTodayStyle}>
        <p>{temperature}°C</p>
        <WeatherToday weathercode={weathercode} />
      </div>
      <p>
        <strong>Maximum temperature today: </strong> {temperatureMax}°C
      </p>
      <p>
        <strong>Minimun temperature today: </strong> {temperatureMin}°C
      </p>
      <p>
        <strong>Wind: </strong>
        {wind}km/h
      </p>
    </div>
  );
}

export default Weather;
