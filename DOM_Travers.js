function traverseDOM(node) {
    // recursion exit condition
    if (!node) {
        return;
    }
    // the do what we want part
    if (node.className == "red") {
        node.style.color = "red";
    }
    // the recursion traverse part
    let childrens = node.children;
    // do the same for each child
    for (let i = 0; len = childrens.length; i < len; i++) {
        const element = array[i];
        
    }
}