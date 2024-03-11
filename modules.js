"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// modules
var stringUtils_1 = require("./stringUtils");
console.log((0, stringUtils_1.capitalize)("hello"));
// default exports
var greeter_1 = require("./greeter");
console.log((0, greeter_1.default)("John"));
var greeter_2 = require("./greeter");
console.log((0, greeter_2.goodbye)("Arthur"));
