"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhoneNumber_1 = require("./PhoneNumber");
var phoneNum = new PhoneNumber_1.PhoneNumber();
var num1 = '(84)-(0978489648)';
var num2 = '(a8)-(22222222)';
console.log(phoneNum.validatePhoneNum(num1));
console.log(phoneNum.validatePhoneNum(num2));
