// const lyrics = 'Ami jare valobashi, tare abar bashi na, keno tare valo lage na';

// const searchString = lyrics.includes('valobashi')

// console.log(searchString);


// ------------------------------------------- \\

// const myAddress = "141, Swastipur, Kushtia Sadar, Kushtia";

// const searchString = "Kushtia";

// const checkExist = myAddress.includes(searchString);

// console.log(checkExist);


// ------------------------------------------- \\

const myAddress = "141, Swastipur, Kushtia Sadar, Kushtia";

const searchString = "Swastipur";

const myAddressLowercase = myAddress.toLowerCase();
const searchStringLowercase = searchString.toLowerCase();

const checkExistence = myAddressLowercase.includes(searchStringLowercase);
const checkExistenceOneLine = myAddress.toLowerCase().includes(searchString.toLowerCase());

console.log(checkExistence);
console.log(checkExistenceOneLine);


// ------------------------------------------- \\

// IndexOf
console.log (myAddress.indexOf('Kushtia'));

// Starts with
const subject = 'Application for HTML-CSS-JS-2022';
console.log(subject.startsWith('Application'));

// Ends with
const filename = 'resume.pdf';
console.log(filename.endsWith('.pdf'));
