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
// Function call
const result = radianToDegree(10);
console.log(result);

