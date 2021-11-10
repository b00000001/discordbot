const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
import dotenv from 'dotenv';
dotenv.config();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction: any) => {
  console.log('interaction');
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    console.log('ping received');
    await interaction.reply('Pong!');
  }
  if (interaction.commandName === 'user') {
    console.log('ping received');
    await interaction.reply('User!');
  }
});

client.login(process.env.TOKEN);
