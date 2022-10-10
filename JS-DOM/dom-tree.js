

// Create element
const li = document.createElement("li")

// Set innerText
li.innerText = "Loop"

// Append to the list
const list = document.getElementById("js-concept-list");
list.appendChild(li)

// Next sibling
console.log(li.nextSibling)

// Previous sibling
console.log(li.previousSibling)

// Parent Element/Node
console.log(li.parentElement)
console.log(li.parentNode)