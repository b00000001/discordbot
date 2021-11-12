import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const token = process.env.TEMPEST_TOKEN;
const station_id = process.env.TEMPEST_STATION_ID;

const pullWeather = async () => {
  let d = new Date();
  const metaData = await axios.get(
      `https://swd.weatherflow.com/swd/rest/stations?token=${token}`
  );
  const observation = await axios.get(
      `https://swd.weatherflow.com/swd/rest/observations/station/${station_id}?token=${token}`
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

export default pullWeather;
