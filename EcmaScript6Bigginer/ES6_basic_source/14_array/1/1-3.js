
debugger;

//Node List
const nodes = document.querySelectorAll(".sports");
const show = (node) => console.log(node.textContent);
Array.from(nodes).forEach(show);
