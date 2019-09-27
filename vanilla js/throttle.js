
/* throttled - checks if timer not expired?*/

const throttle = (cb, limit) {
  let wait = false;
  return (...args) => {
    if (!wait){
      cb.apply(this,args);
      wait = true;
      setTimeout( () => {
        timer = false;
      }, limit);
    }
  };
}


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
