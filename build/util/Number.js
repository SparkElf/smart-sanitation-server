"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInt = void 0;
function randomInt(min, max) {
    //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomInt = randomInt;