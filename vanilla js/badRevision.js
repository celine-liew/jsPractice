/* If you have 500 revisions of a program, write a program  that will find and return the FIRST bad revision given a isBad(revision i) function. */


function isBad(i) {
  // function
  return (i >= 15) //e.g for testing
}

function findBad(n) {
  let low = 0, high = n;
  
  while(low < high) {
    let mid = low + Math.floor( (high-low)/2);
    
    if (isBad(mid)){
      high = mid;
    } else{
      low = mid + 1;
    }
  }
  return low;
}

console.log(findBad(500)) . // 15
