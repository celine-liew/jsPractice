//* flatten array *//

/* iterative */

const flattenArray = (arr) => {
  let result = [];
  let stack = [...arr];
  // console.log(stack);
  
  while(stack.length){
    if (!Array.isArray(stack[0])){
      result.push(stack.shift());
      continue;
    }
    if (stack[0].length) {
      stack.unshift(stack[0].shift());
    } else
      stack.shift();
  }
  return result;
}


console.log(flattenArray([1,2,[3,4]]))
console.log(flattenArray([1,2,[3],[4,[5]]]))

/*recursive*/
const flattenArray = (arr) => {
  let result = [];
  
  const flatten = (elem) => {
    if (!Array.isArray(elem)){
      result.push(elem);
    }else {
      for (let i = 0; i<elem.length; i++){
        flatten(elem[i])
      }
    }
  }
  
    
  flatten(arr);
  
  return result
  
}
console.log(flattenArray([1,2,[3,"string"]]))
