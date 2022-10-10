// Check if a parameter is a number or not

// Using isNaN

// const myFunction = (param) => {
//     const checker = isNaN(param);

//     if (!checker) {
//         return false;
//     } else {
//         return true;
//     }
// };

// console.log(myFunction(100));

// Using typeof

// const myFunction2 = (param) => {
//     const checker = typeof param;

//     if (checker == "number") {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(myFunction2(20));

// Change variable value to falsy ot truthy with ! and !!

// let storeFalsyValue = true;
// if (!storeFalsyValue) {
//     console.log("Nothing to show");
// } else {
//     console.log("You are amazing");
// }

// Write an arrow function that will take 3 parameters (first 2 parameters will be numbers, and the third parameter will be a string) that will perform arithmetic operation depending on the third parameter and will print the result.

// const miniCalculator = (param1, param2, param3) => {
//     if (param3 === "add") {
//         return param1 + param2;
//     } else if (param3 === "subtract") {
//         return param1 - param2;
//     } else if (param3 === "multiply") {
//         return param1 * param2;
//     } else if (param3 === "divide") {
//         return param1 / param2;
//     } else if (param3 === "modulus") {
//         return param1 % param2;
//     } else {
//         console.log("invalid operation");
//     }
// };

// const result = miniCalculator(100, 25, "add");
// console.log(result);

// const isTrue = "false";

// if (!isTrue) {
//     console.log("hello");
// } else {
//     console.log("world");
// }

// if ("2" === 2) {
//     console.log("Inside if");
// } else {
//     console.log("Inside else");
// }


function work(x, y = 4) {
    return x + y;
}
console.log(work(32);