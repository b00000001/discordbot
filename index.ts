import {Client, Intents} from 'discord.js';
const client = new Client({intents: [Intents.FLAGS.GUILDS]});
import {pullWeather} from './tempest/index';
import {displaySub} from './snoowrap/index';
import {MessageEmbed, MessageActionRow, MessageSelectMenu} from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

// Inteaction for slash commands
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
  switch (interaction.commandName) {
    case 'ping':
      await interaction.reply('Pong!');
      break;

    // Weather Command

    case 'weather':
      const weatherData = await pullWeather();
      const weatherEmbed = new MessageEmbed()
        .setTitle('Weather')
        .setColor('#0099ff')
        .addFields(
          {
            name: 'Station Webpage',
            value: `https://tempestwx.com/station/25168/`,
            inline: true,
          },
          {
            name: 'Current Conditions',
            value: `${weatherData.current_conditions.conditions}`,
            inline: true,
          },
          {
            name: 'Precipitation',
            value: `${weatherData.current_conditions.precip_accum_local_day} in
            `,
            inline: true,
          },
          {
            name: 'Current Temp',
            value: `${
              weatherData.current_conditions.air_temperature * 1.8 + 32
            } F`,
            inline: true,
          },
          {
            name: 'Current Humidity',
            value: `${weatherData.current_conditions.relative_humidity}%`,
            inline: true,
          },
          {
            name: 'Pressure Trend',
            value: `${weatherData.current_conditions.pressure_trend}`,
            inline: true,
          },
          {
            name: 'Wind Speed',
            value: `${weatherData.current_conditions.wind_avg}`,
            inline: true,
          },
          {
            name: 'Wind Direction',
            value: `${weatherData.current_conditions.wind_direction_cardinal}`,
            inline: true,
          },
          {
            name: 'Wind Gust',
            value: `${weatherData.current_conditions.wind_gust}`,
            inline: true,
          }
        )
        .setTimestamp();
      interaction.reply({embeds: [weatherEmbed], ephemeral: true});
      break;

    // Forecast Command

    case 'forecast':
      const {forecast} = await pullWeather();
      const data = await pullWeather();
      const forecastEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${data.location_name}`)
        .setURL('https://tempestwx.com/station/25168/')
        .setAuthor('Tempest Weather Forecast')
        .addFields(
          {
            name: 'Monday',
            value: `${forecast.daily[0].conditions} 
            High ${forecast.daily[0].air_temp_high * 1.8 + 32} F 
            Low ${forecast.daily[0].air_temp_low * 1.8 + 32} F`,
          },
          {
            name: 'Tuesday',
            value: `${forecast.daily[1].conditions} 
            High ${forecast.daily[1].air_temp_high * 1.8 + 32} F 
            Low: ${forecast.daily[1].air_temp_low * 1.8 + 32} F`,
          },
          {
            name: 'Wednesday',
            value: `${forecast.daily[2].conditions} 
            High ${forecast.daily[2].air_temp_high * 1.8 + 32} F 
            Low: ${forecast.daily[2].air_temp_low * 1.8 + 32} F`,
          },
          {
            name: 'Thursday',
            value: `${forecast.daily[3].conditions} 
            High ${forecast.daily[3].air_temp_high * 1.8 + 32} F 
            Low: ${forecast.daily[3].air_temp_low * 1.8 + 32} F`,
          },
          {
            name: 'Friday',
            value: `${forecast.daily[4].conditions} 
            High: ${forecast.daily[4].air_temp_high * 1.8 + 32} F 
            Low: ${forecast.daily[4].air_temp_low * 1.8 + 32} F`,
          },
          {
            name: 'Saturday',
            value: `${forecast.daily[5].conditions} 
            High ${forecast.daily[5].air_temp_high * 1.8 + 32} F 
            Low: ${forecast.daily[5].air_temp_low * 1.8 + 32} F`,
          },
          {
            name: 'Sunday',
            value: `${forecast.daily[6].conditions} 
            High ${forecast.daily[6].air_temp_high * 1.8 + 32} F 
            Low: ${forecast.daily[6].air_temp_low * 1.8 + 32} F`,
          }
        )
        .setTimestamp();
      interaction.reply({
        embeds: [forecastEmbed],
        ephemeral: true,
      });
      break;

    // Test Command

    case 'reddit':
      const row = new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Select a Subreddit')
          .setMinValues(1)
          .setMaxValues(1)
          .addOptions([
            {
              label: 'Astronomy',
              description: 'Everything to do with Astronomy',
              value: 'astronomy',
            },
          ])
      );
      await interaction.reply({
        content: 'Test',
        // embeds: [exampleEmbed],
        ephemeral: true,
        components: [row],
      });
      break;
    default:
      await interaction.reply('Unknown command!');
      break;
  }
});

// Interaction for select menu
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  if (interaction.values[0] === 'astronomy') {
    const subData = await displaySub();
    await interaction.update({
      content: `${subData.map((entry) => `${entry} \n`)}`,
      components: [],
    });
  }
});
client.login(process.env.DISCORD_TOKEN);
