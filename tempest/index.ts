import axios from 'axios';
import fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();

const token = process.env.TOKEN;
const station_id = process.env.STATION_ID;

(async () => {
  let d = new Date();
  const metaData = await axios.get(
    `https://swd.weatherflow.com/swd/rest/stations?token=${token}`
  );
  const observation = await axios.get(
    `https://swd.weatherflow.com/swd/rest/observations/station/${station_id}?token=${token}`
  );
  console.log(`
  Current Temp: ${observation.data.obs[0].air_temperature * 1.8 + 32}F
    Current Time: ${d.getHours()}:${
    d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
  }:${d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()}
  `);
})();
