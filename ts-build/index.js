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
var index_2 = require("./tempest/index");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
client.once('ready', function () {
    var _a;
    console.log("Logged in as " + ((_a = client.user) === null || _a === void 0 ? void 0 : _a.tag) + "!");
});
client.on('interactionCreate', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f;
    var _g, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                if (!interaction.isCommand())
                    return [2 /*return*/];
                _a = interaction.commandName;
                switch (_a) {
                    case 'ping': return [3 /*break*/, 1];
                    case 'weather': return [3 /*break*/, 3];
                    case 'forecast': return [3 /*break*/, 6];
                }
                return [3 /*break*/, 9];
            case 1: return [4 /*yield*/, interaction.reply('Pong!')];
            case 2:
                _j.sent();
                return [3 /*break*/, 11];
            case 3:
                _c = (_b = interaction).reply;
                _g = {};
                return [4 /*yield*/, (0, index_1.pullWeather)()];
            case 4: return [4 /*yield*/, _c.apply(_b, [(_g.content = _j.sent(),
                        _g.ephemeral = true,
                        _g)])];
            case 5:
                _j.sent();
                return [3 /*break*/, 11];
            case 6:
                _e = (_d = interaction).reply;
                _h = {};
                _f = "Forecast: ";
                return [4 /*yield*/, (0, index_2.showForecast)()];
            case 7: return [4 /*yield*/, _e.apply(_d, [(_h.content = _f + (_j.sent()),
                        _h.ephemeral = true,
                        _h)])];
            case 8:
                _j.sent();
                return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, interaction.reply('Unknown command!')];
            case 10:
                _j.sent();
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); });
client.login(process.env.DISCORD_TOKEN);
