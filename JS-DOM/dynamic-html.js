// getAttribute
const containerId = container.getAttribute("id");
console.log(containerId);

// setAttribute 
container.setAttribute("class", "container blue-bg text-center");

// classList
const containerClasses = container.classList;
console.log(containerClasses);

// add class
container.classList.add("grid");

// remove class
container.classList.remove("blue-bg");

console.log(container.innerHTML)
console.log(container.innerText)

container.innerHTML = `
<h1 id="title">Hello javascript</h1>

        <h3 id="subtitle">Javascript Core Concepts:</h3>

        <ol id="js-concept-list">
            <li class="list-item">Variables</li>
            <li class="list-item">Array</li>
            <li class="list-item">Objects</li>
            <li class="list-item">Functions</li>
        </ol>
`