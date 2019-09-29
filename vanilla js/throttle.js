/* throttled - checks if timer not expired?  by the rate (number of events per unit time)*/


/* using boolean */

const throttle = (cb, limit) => {
  let wait = false;
  return (...args) => {
    if (!wait){
      cb.call(this,...args); //cb();
      wait = true;
      setTimeout( () => {
        wait = false;
      }, limit);
    }
  };
}

function myFunc() {
  console.log('Called');
}


let throttleFunc = throttle(myFunc, 3000);

function handleClick() {
  throttleFunc();
}




/* using timeout = null */


function throttle(func, delay) {
  let timeout = null
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.call(this, ...args)
        timeout = null
      }, delay)
    }
  }
}

// with eventlistener: window.addEventListener('resize', throttle(function(e){console.log(e)}, 100))

// throttle(function(arg1, arg2){console.log(arg1, arg2);}, 100)('red', 'blue');
// red blue

/* throttle by the delay between two handled events.  */

function throttled(fn, delay){
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall < delay){
      return;
    }
    lastCall = now;
    return fn(...args);
}
