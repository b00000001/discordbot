import { Client, Intents } from 'discord.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
import { pullWeather } from './tempest/index';
import { showForecast } from './tempest/index';
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
      await interaction.reply({ content: await pullWeather(), ephemeral: true });
      break;
    case 'forecast':
      await interaction.reply({ content: `Forecast: ${await showForecast()}`, ephemeral: true });
      break;
    default:
      await interaction.reply('Unknown command!');
      break;
  }
});

client.login(process.env.DISCORD_TOKEN);
