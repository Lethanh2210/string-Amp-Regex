import {AccountRegex} from "./AccountRegex";

let name: string = "hai phu";
let regex = new AccountRegex();
console.log(regex.validateAccount(name));
