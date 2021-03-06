"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
var index_1 = require("./tempest/index");
var index_2 = require("./snoowrap/index");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
client.once('ready', function () {
    var _a;
    console.log("Logged in as ".concat((_a = client.user) === null || _a === void 0 ? void 0 : _a.tag, "!"));
});
// Inteaction for slash commands
client.on('interactionCreate', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, weatherData, weatherEmbed, forecast, data, forecastEmbed, modal, textInput, firstRow;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!interaction.isCommand())
                    return [2 /*return*/];
                _a = interaction.commandName;
                switch (_a) {
                    case 'ping': return [3 /*break*/, 1];
                    case 'weather': return [3 /*break*/, 3];
                    case 'forecast': return [3 /*break*/, 5];
                    case 'reddit': return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 1: return [4 /*yield*/, interaction.reply('Pong!')];
            case 2:
                _b.sent();
                return [3 /*break*/, 12];
            case 3: return [4 /*yield*/, (0, index_1.pullWeather)()];
            case 4:
                weatherData = _b.sent();
                weatherEmbed = new discord_js_1.MessageEmbed()
                    .setTitle('Weather')
                    .setColor('#0099ff')
                    .addFields({
                    name: 'Station Webpage',
                    value: "https://tempestwx.com/station/25168/",
                    inline: true,
                }, {
                    name: 'Current Conditions',
                    value: "".concat(weatherData.current_conditions.conditions),
                    inline: true,
                }, {
                    name: 'Precipitation',
                    value: "".concat(weatherData.current_conditions.precip_accum_local_day, " in\n            "),
                    inline: true,
                }, {
                    name: 'Current Temp',
                    value: "".concat(weatherData.current_conditions.air_temperature * 1.8 + 32, " F"),
                    inline: true,
                }, {
                    name: 'Current Humidity',
                    value: "".concat(weatherData.current_conditions.relative_humidity, "%"),
                    inline: true,
                }, {
                    name: 'Pressure Trend',
                    value: "".concat(weatherData.current_conditions.pressure_trend),
                    inline: true,
                }, {
                    name: 'Wind Speed',
                    value: "".concat(weatherData.current_conditions.wind_avg),
                    inline: true,
                }, {
                    name: 'Wind Direction',
                    value: "".concat(weatherData.current_conditions.wind_direction_cardinal),
                    inline: true,
                }, {
                    name: 'Wind Gust',
                    value: "".concat(weatherData.current_conditions.wind_gust),
                    inline: true,
                })
                    .setTimestamp();
                interaction.reply({ embeds: [weatherEmbed], ephemeral: true });
                return [3 /*break*/, 12];
            case 5: return [4 /*yield*/, (0, index_1.pullWeather)()];
            case 6:
                forecast = (_b.sent()).forecast;
                return [4 /*yield*/, (0, index_1.pullWeather)()];
            case 7:
                data = _b.sent();
                forecastEmbed = new discord_js_1.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle("".concat(data.location_name))
                    .setURL('https://tempestwx.com/station/25168/')
                    .setAuthor('Tempest Weather Forecast')
                    .addFields({
                    name: 'Monday',
                    value: "".concat(forecast.daily[0].conditions, " \n            High ").concat(forecast.daily[0].air_temp_high * 1.8 + 32, " F \n            Low ").concat(forecast.daily[0].air_temp_low * 1.8 + 32, " F"),
                }, {
                    name: 'Tuesday',
                    value: "".concat(forecast.daily[1].conditions, " \n            High ").concat(forecast.daily[1].air_temp_high * 1.8 + 32, " F \n            Low: ").concat(forecast.daily[1].air_temp_low * 1.8 + 32, " F"),
                }, {
                    name: 'Wednesday',
                    value: "".concat(forecast.daily[2].conditions, " \n            High ").concat(forecast.daily[2].air_temp_high * 1.8 + 32, " F \n            Low: ").concat(forecast.daily[2].air_temp_low * 1.8 + 32, " F"),
                }, {
                    name: 'Thursday',
                    value: "".concat(forecast.daily[3].conditions, " \n            High ").concat(forecast.daily[3].air_temp_high * 1.8 + 32, " F \n            Low: ").concat(forecast.daily[3].air_temp_low * 1.8 + 32, " F"),
                }, {
                    name: 'Friday',
                    value: "".concat(forecast.daily[4].conditions, " \n            High: ").concat(forecast.daily[4].air_temp_high * 1.8 + 32, " F \n            Low: ").concat(forecast.daily[4].air_temp_low * 1.8 + 32, " F"),
                }, {
                    name: 'Saturday',
                    value: "".concat(forecast.daily[5].conditions, " \n            High ").concat(forecast.daily[5].air_temp_high * 1.8 + 32, " F \n            Low: ").concat(forecast.daily[5].air_temp_low * 1.8 + 32, " F"),
                }, {
                    name: 'Sunday',
                    value: "".concat(forecast.daily[6].conditions, " \n            High ").concat(forecast.daily[6].air_temp_high * 1.8 + 32, " F \n            Low: ").concat(forecast.daily[6].air_temp_low * 1.8 + 32, " F"),
                })
                    .setTimestamp();
                interaction.reply({
                    embeds: [forecastEmbed],
                    ephemeral: true,
                });
                return [3 /*break*/, 12];
            case 8:
                modal = new discord_js_1.Modal().setTitle('Reddit').setCustomId('Modal');
                textInput = new discord_js_1.TextInputComponent()
                    .setCustomId('modalText')
                    .setLabel('Enter the subreddit you wish to check')
                    .setStyle('SHORT');
                firstRow = new discord_js_1.MessageActionRow().addComponents(textInput);
                modal.addComponents(firstRow);
                return [4 /*yield*/, interaction.showModal(modal)];
            case 9:
                _b.sent();
                return [3 /*break*/, 12];
            case 10: return [4 /*yield*/, interaction.reply('Unknown command!')];
            case 11:
                _b.sent();
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); });
client.on('interactionCreate', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var subName, url, subData, redditEmbed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!interaction.isModalSubmit())
                    return [2 /*return*/];
                subName = interaction.fields.getTextInputValue('modalText');
                url = 'http://www.google.com';
                return [4 /*yield*/, (0, index_2.displaySub)(subName)];
            case 1:
                subData = _a.sent();
                redditEmbed = new discord_js_1.MessageEmbed()
                    .setTitle('Reddit')
                    .setColor('#0099ff')
                    .addFields({
                    name: "http://reddit.com/r/".concat(subName),
                    value: "".concat(subData
                        .map(function (d) {
                        return "\n      Title: ".concat(d[0], "\n      Permalink: ").concat(d[1], "\n      ");
                    })
                        .join('')),
                    inline: true,
                })
                    .setTimestamp();
                return [4 /*yield*/, interaction.reply({ embeds: [redditEmbed], ephemeral: true })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
client.login(process.env.DISCORD_TOKEN);
//# sourceMappingURL=index.js.map