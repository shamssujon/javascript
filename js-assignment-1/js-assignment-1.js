// Problem:1  radianToDegree
// Formula: degrees = radians × 180° / π

function radianToDegree(radian) {
    // Check input type. We need to input number.
    const inputType = typeof radian;

    // Compare input type if a number or not
    if (inputType === "number") {
        const degree = (radian * 180) / Math.PI;
        return degree.toFixed(2);
    } else {
        console.log("Enter a number");
        return false;
    }
}

// Problem:2  isJavaScriptFile

function isJavaScriptFile(fileName) {
    // Check input type. We need to input string.
    const inputType = typeof fileName;

    // Compare input type if a string or not
    if (inputType === "string") {
        // Check if input filename ends with ".js"
        if (fileName.endsWith(".js")) {
            return true;
        } else {
            return false;
        }
    } else {
        console.log("Enter a string");
        return false;
    }
}

// Problem 3: oilPrice

const dieselBasePrice = 114;
const petrolBasePrice = 130;
const octaneBasePrice = 135;

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if (
        typeof dieselQuantity === "number" &&
        typeof petrolQuantity === "number" &&
        typeof octaneQuantity === "number"
    ) {
        const dieselTotalPrice = dieselBasePrice * dieselQuantity;
        const petrolTotalPrice = petrolBasePrice * petrolQuantity;
        const octaneTotalPrice = octaneBasePrice * octaneQuantity;
        const grossPrice = dieselTotalPrice + petrolTotalPrice + octaneTotalPrice;
        return grossPrice;
    } else {
        console.log("Enter numbers");
        return false;
    }
}

// Problem 4: publicBusFare

const reservedBusCapacity = 50;
const microBusCapacity = 11;
const publicBusPerFare = 250;

function publicBusFare(totalPeople) {
    // Check input type. We need to input number.
    const inputType = typeof totalPeople;

    // Compare input type if a number or not
    if (inputType === "number") {
        // First, divide the totalPeople by the reservedBusCapacity(50) and get the remainder,
        // If the remainder is 0, it means total people is either 0 or equally divided by 50,
        // If totalpeople is 0, then no one will go to picnic, so no public bus fare.
        // If total people is equally divided by 50, then all will fit into the researved bus,
        // no need for any microbus or public bus, so no public bus fare

        let restPeople = totalPeople % reservedBusCapacity;

        // if the remainder in grater than 0 and less than 50,
        // then first we check if it is also grater than the microBusCapacity
        // If it is grater than microBusCapacity,
        // than we divide the remainder with the microBusCapacity and get the remainder again
        if (restPeople >= microBusCapacity) {
            restPeople = restPeople % microBusCapacity;
        }

        // If not, remaining people will go in Public bus
        // Finally we calculate the totalPublicBusFare by multiplying the remaining and the publicBusPerFare
        // ulala kala kala!!!
        const totalPublicBusFare = restPeople * publicBusPerFare;

        return totalPublicBusFare;
    } else {
        console.log("Enter a number");
        return false;
    }
}

// Problem 5: isBestFriend

function isBestFriend(object1, object2) {
    if (object1.name === object2.friend && object1.friend === object2.name) {
        return true;
    } else {
        return false;
    }
}
