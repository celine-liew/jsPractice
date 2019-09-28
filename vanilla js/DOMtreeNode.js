// Given two identical DOM tree structures, A and B, and a node from A, find the corresponding node in B.  

const findNode = (rootA, rootB, targetNode) => {
  if (rootA === targetNode) {
    return rootB;
  }
  
  let nodeB;
  
  while(!nodeB){
    for (let i =0; i < rootA.childNodes.length; i++){
      nodeB = findNode(rootA.childNodes[i], rootB.childNodes[i], targetNode);
    }
  }
  return nodeB
}

// traverse the tree down in parallel.

// method 2: travel up the node and find the path (no need to traverse whole tree)
const getPathIndex = (node) => {
  return Array.from(node.parentNode.childNodes).indexOf(node)
    //Array.prototype.indexOf.call(node.parentNode.childNodes, node);
}


const getPath = (root, target) => {
  let current = target;
  let path = [];
  
  while (current !== root) {
    let pathIndex = getPathIndex(current);
    path.unshift(pathIndex);
    current = current.parentNode;
  }
  return path;
}

const locateNode = (root, path) => {
  let curr = root;
  for (let idx of path) {
    current = current.childNodes[idx];
  }
  return current;
}

const getNodeB = (rootA, rootB, target) => {
  let path = getPath(rootA, target);
  return locateNode(rootB, path);
}
