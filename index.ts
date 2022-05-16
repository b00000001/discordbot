import {Client, Intents} from 'discord.js';
const client = new Client({intents: [Intents.FLAGS.GUILDS]});
import {pullWeather} from './tempest/index';
import {showForecast} from './tempest/index';
import {MessageEmbed, MessageAttachment} from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
  switch (interaction.commandName) {
    case 'ping':
      await interaction.reply('Pong!');
      break;
    case 'weather':
      const data = await pullWeather();
      const embed = new MessageEmbed().setTitle('Weather').setColor('#0099ff');
      embed.addFields(
        {
          name: 'Station Webpage',
          value: `https://tempestwx.com/station/25168/`,
          inline: true,
        },
        {
          name: 'Time',
          value: `${new Date(
            data.current_conditions.time * 1000
          ).toLocaleTimeString()}`,
          inline: true,
        },
        {
          name: 'Location',
          value: `${data.location_name}`,
          inline: true,
        },
        {
          name: 'Current Temp',
          value: `${data.current_conditions.air_temperature * 1.8 + 32} F`,
          inline: true,
        },
        {
          name: 'Current Humidity',
          value: `${data.current_conditions.relative_humidity}%`,
          inline: true,
        },
        {
          name: 'Pressure Trend',
          value: `${data.current_conditions.pressure_trend}`,
          inline: true,
        },
        {
          name: 'Wind Speed',
          value: `${data.current_conditions.wind_avg}`,
          inline: true,
        },
        {
          name: 'Wind Direction',
          value: `${data.current_conditions.wind_direction_cardinal}`,
          inline: true,
        },
        {
          name: 'Wind Gust',
          value: `${data.current_conditions.wind_gust}`,
          inline: true,
        }
      );
      interaction.reply({embeds: [embed], ephemeral: true});
      break;
    case 'forecast':
      const {forecast} = await pullWeather();
      const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${forecast.location_name}`)
        .setURL('https://tempestwx.com/station/25168/')
        .setAuthor('Tempest Weather Forecast')
        .addFields({
          name: 'Monday',
          value: `${forecast.daily[0].conditions}`,
        })
        .setThumbnail(weatherIcon)
        .setTimestamp();
      interaction.reply({
        embeds: [exampleEmbed],
        ephemeral: true,
      });
      break;
    case 'test':
      let msgAttachment = new MessageAttachment(svg2Png(), 'Aaron.png');
      const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Test');
      interaction.reply({
        content: 'Test',
        embeds: [exampleEmbed],
        ephemeral: true,
      });
      break;
    default:
      await interaction.reply('Unknown command!');
      break;
  }
});

client.login(process.env.DISCORD_TOKEN);
