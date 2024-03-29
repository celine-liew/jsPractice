// /* function returning a function that adds up the number */    

const addFunc = (num) => {
  let addNum = num;
  return function(num) {
    return addNum + num;
  }
};


const add10 = addFunc(10);
console.log(add10(4));
console.log(add10(10));


// /* make counter */

const makeCounter = (num) => {
  let counter = num;
  return () => {
    return ++counter;
  }
}

const countFromOne = makeCounter(1);
console.log(countFromOne());
console.log(countFromOne());


/* make counter that have makeCounter.increase / .decrease ---> need the brackets*/

const Counter = (num) => {
  let counter = num;
  return () => ({             // ( is implicit return
    increase: () => ++counter,
    decrease: () => --counter
  })
}

const countUpDown = Counter(1)(); // --> note, need this extra ()!
console.log(countUpDown);
console.log(countUpDown.increase());
console.log(countUpDown.increase());



/* make counter that have makeCounter.increase / .decrease ----> making it return an object */

const Counter = (num) => {
  let counter = num;
  return {                      // instead of function, return object
    increase: () => ++counter,
    decrease: () => --counter
  }
}

const countUpDown = Counter(1);
console.log(countUpDown);
console.log(countUpDown.increase());
console.log(countUpDown.increase());


