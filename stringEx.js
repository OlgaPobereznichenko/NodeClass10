const text = 'Welcome to JavaScript!!';
const characterCount = text.length;

console.log(characterCount); // 23
console.log(text.length);

let myName = 'Olga';
var newVal = 0;

newVal = myName.toUpperCase();
console.log(newVal);

newVal = newVal.toLowerCase();
console.log(newVal);

// concat
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2, '!'));
// expected  output:"Hello World"

console.log(str2.concat(', ', str1));
// expected  output:"World, Hello"

console.log(str1.concat(str2));
// expected  output:"HelloWorld"

//char at

var position = str1.charAt(0);
console.log(position);

console.log(str1.charAt(str1.length -1));
console.log(str1.charAt(str1.length));
// hello
// 0 - h, l - e, 2 - l, 3 - l, 4 - o