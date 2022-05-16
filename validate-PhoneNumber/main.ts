import {PhoneNumber} from "./PhoneNumber";

let phoneNum = new PhoneNumber();

let num1 = '(84)-(0978489648)';
let num2 = '(a8)-(22222222)'

console.log(phoneNum.validatePhoneNum(num1));
console.log(phoneNum.validatePhoneNum(num2));