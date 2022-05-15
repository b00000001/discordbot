"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SlashCommandBuilder = require('@discordjs/builders').SlashCommandBuilder;
var REST = require('@discordjs/rest').REST;
var Routes = require('discord-api-types/v9').Routes;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!'),
    new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Weather from Tempest Weatherstation API.'),
    new SlashCommandBuilder()
        .setName('forecast')
        .setDescription('Forecast from Tempest Weatherstation API.'),
    new SlashCommandBuilder().setName('test').setDescription('Test command.'),
].map(function (command) { return command.toJSON(); });
var rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);
rest
    .put(Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID), { body: commands })
    .then(function () { return console.log('Successfully registered application commands.'); })
    .catch(console.error);
