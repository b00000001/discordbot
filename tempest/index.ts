import axios from 'axios';
import * as dotenv from 'dotenv';
import {MessageEmbed} from 'discord.js';
dotenv.config();

const token = process.env.TEMPEST_TOKEN;
const stationId = process.env.TEMPEST_STATION_ID;

const pullWeather = async () => {
  const {data} = await axios.get(
    `https://swd.weatherflow.com/swd/rest/better_forecast?station_id=${stationId}&token=${token}`
  );
  return data;
};
export {pullWeather};
