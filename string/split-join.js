const lyrics =
    "Age jodi janitam. tobe mon fire chaitam. ei jala ar prane shohe na re. ei jala ar prane shohe na";

// Split
const parts = lyrics.split(" ");
const sentences = lyrics.split(".");
const charecters = lyrics.split("");

console.log(parts);
console.log(sentences);
console.log(charecters);

// Slice
const sliceLyrics = lyrics.slice(5, 15);
console.log(sliceLyrics);

// Join
const lines = [
    "Age jodi janitam",
    "Tobe mon fire chaitam",
    "Ei jala ar prane shohe na re",
    "Ei jala ar prane shohe na",
];

const ontora = lines.join('. ');

console.log(ontora);