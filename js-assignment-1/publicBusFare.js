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

const result = publicBusFare(12);
console.log(result);
