"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountRegex_1 = require("./AccountRegex");
var name = "hai phu";
var regex = new AccountRegex_1.AccountRegex();
console.log(regex.validateAccount(name));
