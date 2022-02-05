// equality
let firstNumber = 10, secondNumber = '10', thirdNumber = 30, fourthNumber = '10'
let result;

result = firstNumber == secondNumber;
console.log(result); // true

result = firstNumber > thirdNumber;
console.log(result); // false

result = firstNumber < secondNumber;
console.log(result); // false

result = firstNumber >= secondNumber;
console.log(result); // true

result = firstNumber <= thirdNumber;
console.log(result); // true

result = firstNumber === fourthNumber;
console.log(result); // false

result = firstNumber == fourthNumber;
console.log(result); // true