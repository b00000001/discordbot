import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const token = process.env.TEMPEST_TOKEN;
const stationId = process.env.TEMPEST_STATION_ID;

const pullWeather = async () => {
  let d = new Date();
  const observation = await axios.get(
    `https://swd.weatherflow.com/swd/rest/observations/station/${stationId}?token=${token}`
  );
  const currentObservation = observation.data.obs[0];
  const response = `
  Station Webpage: https://tempestwx.com/station/25168/
  Time: ${d.getHours()}:${
    d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
  }:${d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()}
  Location: ${observation.data.station_name}
  Current Temp: ${currentObservation.air_temperature * 1.8 + 32}F
  Current Humidity: ${currentObservation.relative_humidity}%
  Pressure Trend: ${currentObservation.pressure_trend}
  `;
  return response;
};

const showForecast = async () => {
  const {data} = await axios.get(
    `https://swd.weatherflow.com/swd/rest/better_forecast?station_id=${stationId}&token=${token}`
  );
  const day1 = new Date(data.forecast.daily[0].day_start_local);
  const day2 = new Date(data.forecast.daily[1].day_start_local);
  const keys = Object.entries(data.forecast.daily[0]);
  return `
  Day1: ${day1}
  Day2: ${day2}
  `;
};
export {pullWeather, showForecast};
