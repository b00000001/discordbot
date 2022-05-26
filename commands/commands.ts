const {SlashCommandBuilder} = require('@discordjs/builders');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
import dotenv from 'dotenv';
dotenv.config();

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  new SlashCommandBuilder()
    .setName('weather')
    .setDescription('Weather from Tempest Weatherstation API.'),
  new SlashCommandBuilder()
    .setName('forecast')
    .setDescription('Forecast from Tempest Weatherstation API.'),
  new SlashCommandBuilder()
    .setName('reddit')
    .setDescription('Displays top 3 posts for the day in a given Subreddit'),
].map((command) => command.toJSON());

const rest = new REST({version: '9'}).setToken(process.env.DISCORD_TOKEN);

rest
  .put(
    Routes.applicationGuildCommands(
      process.env.DISCORD_CLIENT_ID,
      process.env.DISCORD_GUILD_ID
    ),
    {body: commands}
  )
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
