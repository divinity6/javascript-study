
debugger;

//for-of, NodeList
  const nodes = document.querySelectorAll(".show");
  for (let node of nodes) {
    console.log(node.textContent);
  };
