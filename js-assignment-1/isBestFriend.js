// Problem 5: isBestFriend

function isBestFriend(object1, object2) {
    if (object1.name === object2.friend && object1.friend === object2.name) {
        return true;
    } else {
        return false;
    }
}

const person1 = { name: "abul", friend: "kabul" };
const person2 = { name: "kabul", friend: "abul" };
const result = isBestFriend(person1, person2);
console.log(result);
