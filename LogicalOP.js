// || Or
// && And
// ! Not
let age = 40;
let residense = 'SouthPoint';

let eligible = (age >= 40 || residense == 'DownTown');
console.log(eligible); //true

eligible = (age >= 50 || residense == 'DownTown');
console.log(eligible); // false

eligible = (age >= 40 && residense == 'DownTown');
console.log(eligible); // false

eligible = (age >= 40 && residense == 'SouthPoint');
console.log(eligible); // true

eligible = (age >= 40 && residense == 'southPoint');
console.log(eligible); // false

console.log(!true); // false

let isNumber = true;
isNumber = !isNumber;
console.log(isNumber); // false

// String Special Characters
// \n - newline , \ t tab , ' , ""
console.log("Hi Everyone, \nIt's \"Monday\" today. \t It's first \\ day of the week.")