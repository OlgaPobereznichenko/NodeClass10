//addition
var total;
var number1, number2;
number1 = 5;
number2 = 11;
total = number1 + number2;
total = (number1 + 10) * 2; // 15* 2 = 30;
total = number1 + 10 * 2; // 20 + 5 = 25;
console.log("Total :" + total);

//modulus
var modu = number2 % number1; // 11 % 5 = 1
console.log("Modu: " + modu);

//increment , decrement ++ , --

var number3 = 0; number4 = 3; 
number3++;

console.log("number 3: " + number3); // 1
++number3;
console.log("number 3: " + number3); // 2

number4--;
console.log("number 4:" + number4);
--number4;
console.log("number 4: " + number4);

var number5 = 0, number6 =0, newValuePost = 0, newValuePre = 0

newValuePost = number5++; // newValuePost = 0, number5 = 1 (postfix)
newValuePre = ++number6; // newValuePre = 1, number6 = 1 (prefix)

console.log("newValuePost:" + newValuePost);
console.log("newValuePre: " + newValuePre);

//total = total + 10
total += 10;
total -=10;
total *=10;
total /=10;