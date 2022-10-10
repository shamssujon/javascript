// Where to add
const mainContainer = document.getElementById("container");

// What to be added
const section = document.createElement("section");
section.classList.add("section", "bg-lightcoral")

const subtitle = document.createElement("h3");
subtitle.classList.add("subtitle");
subtitle.innerText = "Javascript selectors";
section.appendChild(subtitle);

const selectorList = document.createElement("ol");

const item1 = document.createElement("li");
item1.innerText = "getElementByTagName()";
selectorList.appendChild(item1);

const item2 = document.createElement("li");
item2.innerText = "getElementById()";
selectorList.appendChild(item2);

const item3 = document.createElement("li");
item3.innerText = "getElementByClassName()";
selectorList.appendChild(item3);

const item4 = document.createElement("li");
item4.innerText = "querySelector()";
selectorList.appendChild(item4);

const item5 = document.createElement("li");
item5.innerText = "querySelectorAll()";
selectorList.appendChild(item5);


section.appendChild(selectorList);
mainContainer.appendChild(section);



// set innerHTML directly
const sectionDataTypes = document.createElement("section");
sectionDataTypes.classList.add("section", "bg-lightcoral");

sectionDataTypes.innerHTML = 
`
<h3 id="subtitle">Javascript Data Types</h3>
<ol id="js-data-types">
    <li>Number</li>
    <li>String</li>
    <li>Boolean</li>
    <li>Object</li>
    <li>Null</li>
    <li>Undefined</li>
</ol>
`;

mainContainer.appendChild(sectionDataTypes);