// let regexpNumber: RegExp = /^[aA0-zZ9]{5}$/;
//
// console.log(regexpNumber.test('abcde'));
// // expected output: true
// console.log(regexpNumber.test('1234B'));
// // expected output: false
// console.log(regexpNumber.test('12345'));
// // expected output: false
//
//
// // let regexpEmail1 = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
// // regexpEmail1.test('marco@expertcodebolg.com');
// // // expected output: true
// // regexpEmail1.test('marcoexpertcodebolg.com');
// // // expected output: false
// //   /^pattern$/
// let regexpEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]\.[a-z]{2,4}$');
// console.log(regexpEmail.test('m@e.com'));
// // expected output: true
// console.log(regexpEmail.test('marcobadstringexpertcodebolg.com'));
// // expected output: false
//
// const chessStory = 'He played the King in a98 and she moved her Queen in chill2.';
// const regexpCoordinates = /\w\d/g;
// console.log(chessStory.match(regexpCoordinates));
// expected output: Array [ 'a8', 'c2']
var re = /\w+\s/g;
var str = 'fee fi fo fum';
var myArray = str.match(re);
console.log(myArray);
// ["fee ", "fi ", "fo "]
