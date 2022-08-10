// PI
console.log(Math.PI);

// ======================================== \\

// Math.abs()
const num1 = 10,
    num2 = 20;
result = Math.abs(num1 - num2);

console.log(result);

// ======================================== \\

// Math.ceil()
console.log(Math.ceil(0.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

// ======================================== \\

// Math.floor()
console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6

// ======================================== \\

/* 
// Math.max()
Returns the largest of the zero or more numbers given as input parameters 
*/
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

// ======================================== \\

/* 
// Math.min()
Returns the lowest-valued number passed into it
*/
console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3

// ======================================== \\

/* 
// Math.pow()
The Math.pow() static method, given two arguments, base and exponent, returns base exponent.
*/
console.log(Math.pow(2, 3));
console.log(Math.pow(4, 0.5));

// ======================================== \\

/* 
// Math.round()
Returns the value of a number rounded to the nearest integer.
*/
console.log(Math.round(0.9));
// expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// expected output: -5 -5 -6

/* 
// Math.random()
Returns a floating-point, pseudo-random number in the range 0 to less than 1.
*/

for (let i = 1; i <= 5; i++) {
    console.log(Math.ceil(Math.random() * 6));
}

function getRandomNumber(max) {
    return Math.round(Math.random() * max);
}

// console.log(getRandomNumber(6)); // LUDO Game ?!

//   console.log(Math.random());
// expected output: a number from 0 to <1
