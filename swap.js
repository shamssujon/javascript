let num1 = 6;
let num2 = 9;

// Wrong method
// num1 = num2;
// num2 = num1;
console.log(num1, num2);

// Methode 1
// let temp = num1;
// num1 = num2;
// num2 = temp;

// console.log(num1, num2);

// Method 2 - Destructing
[num1, num2] = [num2, num1];
console.log(num1, num2);