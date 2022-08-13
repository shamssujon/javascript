// Problem 3: oilPrice

const dieselBasePrice = 114;
const petrolBasePrice = 130;
const octaneBasePrice = 135;

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if (typeof dieselQuantity === "number" && typeof petrolQuantity === "number" && typeof octaneQuantity === "number") {
        const dieselTotalPrice =  dieselBasePrice * dieselQuantity;
        const petrolTotalPrice =  petrolBasePrice * petrolQuantity;
        const octaneTotalPrice =  octaneBasePrice * octaneQuantity;
        const grossPrice = dieselTotalPrice + petrolTotalPrice + octaneTotalPrice;
        return grossPrice;
    } else {
        console.log("Enter numbers");
        return false;
    }
}

const result = oilPrice(1, 0, 2);
console.log(result);
