const heights = [120, 121, 98, 60, 203, 179, 132, 11, 65, -3, 71, 52, 500, -100];
const lowest = getMin(heights);

function getMin(numbers) {
    let lowest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);

        if(element<lowest) {
            lowest = element;
        }
    }

    return lowest;
}

console.log(lowest);