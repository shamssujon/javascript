const heights = [120, 121, 98, 60, 203, 179, 132, 11, 65, -3, 71, 52, 500];
const tallest = getMin(heights);

function getMin(numbers) {
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);

        if(element>largest) {
            largest = element;
        }
    }

    return largest;
}

console.log(tallest);