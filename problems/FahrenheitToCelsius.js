// Method One

// var fahrenheit = 100;
// celsius = (fahrenheit - 32) / 1.8;
// celsiusRounded = parseFloat(celsius.toFixed(3)) ;
// console.log(fahrenheit, 'deg Fahrenheit is equvalent to', celsiusRounded, 'deg Celsius');

// Method Two - Using Function

function fahrenheitToCelsius(fahrenheit) {
    var celcius = (fahrenheit - 32) / 1.8;
    return celcius.toFixed(3);
}

var result = fahrenheitToCelsius(100);

console.log(result);