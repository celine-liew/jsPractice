/ How would you make this work? add(2, 5); // 7add(2)(5); // 7

const add1 = (x,y) => {
    return x+y;
  }


/* currying */

const add = (x) => {
  return (y) => {
    return x+y;
  }
}

console.log(add1(2,3))
console.log(add(2)(3))


/* add(2)(3)(4) */

const addMore = (x) => {
  let sum = x;
  const resFn = (y) => {
    sum+=y;
    return resFn;
  }
  
  resFn.valueOf = () => {
    return sum;
  }
  
  return resFn;
}

console.log("@222")
console.log(addMore(2)(3) == 5) // only works if '==' not '==='
console.log(addMore(2)(3)(4)(5).valueOf())


/* adding both above to work??? */
