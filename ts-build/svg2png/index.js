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
Object.defineProperty(exports, "__esModule", { value: true });
var svg_png_converter_1 = require("svg-png-converter");
var svg2Png = function () { return __awaiter(void 0, void 0, void 0, function () {
    var outputBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, svg_png_converter_1.svg2png)({
                    input: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"350\" height=\"136\" viewBox=\"0 0 350 136\">\n  <g id=\"template\" transform=\"translate(-208 -209)\">\n    <rect id=\"background\" width=\"350\" height=\"136\" transform=\"translate(208 209)\" fill=\"#232323\"/>\n    <text id=\"_usr_\" data-name=\"Aaron\" transform=\"translate(326 286)\" fill=\"#fff\" font-size=\"20\" font-family=\"SegoeUI, Segoe UI\"><tspan x=\"0\" y=\"0\">Hello Aaron</tspan></text>\n    <path id=\"icon\" d=\"M7.5-16.68,15-13.32v5a10.351,10.351,0,0,1-2.148,6.348A9.33,9.33,0,0,1,7.5,1.68,9.33,9.33,0,0,1,2.148-1.973,10.351,10.351,0,0,1,0-8.32v-5Zm1.758,4A2.435,2.435,0,0,0,7.5-13.4a2.435,2.435,0,0,0-1.758.723A2.361,2.361,0,0,0,5-10.918a2.425,2.425,0,0,0,.742,1.777A2.4,2.4,0,0,0,7.5-8.4a2.4,2.4,0,0,0,1.758-.742A2.425,2.425,0,0,0,10-10.918,2.361,2.361,0,0,0,9.258-12.676ZM7.5-6.836a8.754,8.754,0,0,0-2.031.273,6.19,6.19,0,0,0-2.051.9A1.74,1.74,0,0,0,2.5-4.258,6.007,6.007,0,0,0,4.707-2.383,5.947,5.947,0,0,0,7.5-1.6a5.947,5.947,0,0,0,2.793-.781A6.007,6.007,0,0,0,12.5-4.258a1.486,1.486,0,0,0-.547-1.094,4.2,4.2,0,0,0-1.348-.82A10.513,10.513,0,0,0,8.984-6.66,7.147,7.147,0,0,0,7.5-6.836Z\" transform=\"translate(302 286)\" fill=\"#fff\"/>\n  </g>\n</svg>\n",
                    encoding: 'buffer',
                    format: 'png',
                    quality: 1,
                })];
            case 1:
                outputBuffer = _a.sent();
                return [2 /*return*/, outputBuffer];
        }
    });
}); };
exports.default = svg2Png;
// module.exports = async (msg, name) => {
//   const outputBuffer = await svg2png({
//     input: `<svg xmlns="http://www.w3.org/2000/svg" width="350" height="136" viewBox="0 0 350 136">
//   <g id="template" transform="translate(-208 -209)">
//     <rect id="background" width="350" height="136" transform="translate(208 209)" fill="#232323"/>
//     <text id="_usr_" data-name="${name}" transform="translate(326 286)" fill="#fff" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Hello ${name}</tspan></text>
//     <path id="icon" d="M7.5-16.68,15-13.32v5a10.351,10.351,0,0,1-2.148,6.348A9.33,9.33,0,0,1,7.5,1.68,9.33,9.33,0,0,1,2.148-1.973,10.351,10.351,0,0,1,0-8.32v-5Zm1.758,4A2.435,2.435,0,0,0,7.5-13.4a2.435,2.435,0,0,0-1.758.723A2.361,2.361,0,0,0,5-10.918a2.425,2.425,0,0,0,.742,1.777A2.4,2.4,0,0,0,7.5-8.4a2.4,2.4,0,0,0,1.758-.742A2.425,2.425,0,0,0,10-10.918,2.361,2.361,0,0,0,9.258-12.676ZM7.5-6.836a8.754,8.754,0,0,0-2.031.273,6.19,6.19,0,0,0-2.051.9A1.74,1.74,0,0,0,2.5-4.258,6.007,6.007,0,0,0,4.707-2.383,5.947,5.947,0,0,0,7.5-1.6a5.947,5.947,0,0,0,2.793-.781A6.007,6.007,0,0,0,12.5-4.258a1.486,1.486,0,0,0-.547-1.094,4.2,4.2,0,0,0-1.348-.82A10.513,10.513,0,0,0,8.984-6.66,7.147,7.147,0,0,0,7.5-6.836Z" transform="translate(302 286)" fill="#fff"/>
//   </g>
// </svg>
// `,
//     encoding: 'buffer',
//     format: 'png',
//     quality: 1,
//   });
//   // for more configuration options refer to the library
//   return msg.channel.send(
//     `This is a test:`,
//     new MessageAttachment(outputBuffer, '${name}.png')
//   );
// };
