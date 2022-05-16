"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailRegex_1 = require("./EmailRegex");
var emailRegex = new EmailRegex_1.EmailRegex();
// console.log(emailRegex.validate('ab@yahoo.co'));
console.log(emailRegex.validatePass('a1a1aaa'));
