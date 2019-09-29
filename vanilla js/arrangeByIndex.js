/* swap in place*/



function arrangeArr(arr, indices){
  for (let idx of indices){
    let pos = indices.indexOf(idx);
    
    [arr[pos], arr[idx]] =  [arr[idx], arr[pos]];
    [indices[pos], indices[idx]] =  [indices[idx], indices[pos]];
  }
  return arr;
}



function arrIndices(arr, indices) {
  for (var i = 0; i < indices.length; i++) {
    const index = indices.indexOf(i);
    [arr[index], arr[i]] = [arr[i], arr[index]];
    [indices[index], indices[i]] = [indices[i], indices[index]];
  }
  return arr;
}


console.log(arrIndices(["A", "B", "C", "D"], [3, 0, 2, 1]));
console.log(arrangeArr(["A", "B", "C", "D"], [3, 0, 2, 1]));
