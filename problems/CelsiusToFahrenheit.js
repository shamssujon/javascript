// Method One

// var celcius = 100;
// var fahrenheit = (celcius * 1.8) + 32;
// console.log(celcius, "deg Celcius = ", fahrenheit, "deg Fahrenheit");


// Method Two - Using Function

function celciusToFahrenheit(celcius) {
    var fahrenheit = (celcius * 1.8) + 32;
    return fahrenheit.toFixed(3);
}

var result = celciusToFahrenheit(100);

console.log(result)