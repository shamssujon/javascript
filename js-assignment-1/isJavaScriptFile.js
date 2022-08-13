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

// Function call
const result = isJavaScriptFile("image.jpg.js");
console.log(result);
