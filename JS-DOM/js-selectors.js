// Option 1: getElementsByTagName
const listItem = document.getElementsByTagName("li");
console.log(listItem);

// ==================================================== \\

// Option 2: getElementById
const title = document.getElementById("title");
console.log(title);

// ==================================================== \\

// Option 3: getElementsByClassName
const item = document.getElementsByClassName("list-item");
console.log(item);

// ==================================================== \\

// Option 4: querySelector
// by tag name
const meta = document.querySelector("meta");
console.log(meta);

// by ID
const subTitle = document.querySelector("#subtitle");
console.log(subTitle);

// by class name
const item2 = document.querySelector(".list-item");
console.log(item2);

// ==================================================== \\

// Option 5: querySelectorAll
const item3 = document.querySelectorAll(".list-item");
console.log(item3);