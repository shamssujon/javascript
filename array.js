var numbers = [100, 200, 300, 400, 500, 600, 700];
var monitors = ['asusvx229', 'hp22f', 'lg22mk600m'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(vowels);

// 1. Array length/size/elements in it.
console.log(numbers.length);

// Array index.
// index starts from zero (0)

// 2. Get array element by index.
console.log(monitors[1]);
var bestMonitor = monitors[2];
console.log(bestMonitor);

// 3. Set / change element value by index.
numbers[2] = 250;
console.log(numbers);

// 4. Find index of an element.
console.log(numbers.indexOf(400));
var positionIndex = numbers.indexOf(500);
console.log(positionIndex);

// 5. Add new items to the end of an array.
numbers.push(800);
numbers.push(900);
numbers.push(1000);
console.log(numbers);

// 6. Remove the last item of an array.
numbers.pop();
numbers.pop();
console.log(numbers);

// The pop() method returns the removed element.
var poppedElement = numbers.pop();
console.log(numbers);
console.log(poppedElement);

// 7. Add new items to the beginning of an array.
numbers.unshift(50);
console.log(numbers);
numbers.unshift(10, 20);
console.log(numbers);

// 8. Remove the first item of an array.
numbers.shift();
console.log(numbers);

// The shift() method returns the shifted element.
var removedFirstItem = numbers.shift();
console.log(numbers);
console.log(removedFirstItem);