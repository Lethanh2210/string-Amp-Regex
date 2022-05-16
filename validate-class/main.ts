import {ClassRegex} from "./ClassRegex";

let classes = new ClassRegex();
let name1 = 'C0318G';
let name2 = 'M0318G';
let name3 = 'P0323A';

console.log(classes.validateClass(name1));
console.log(classes.validateClass(name2));
console.log(classes.validateClass(name3));