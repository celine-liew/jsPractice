
const debounce = (func, wait = 100) => {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout( () => {func(...args)}, wait);
    
  };
  
}

const sayHi = () => {
  console.log('hello there!!!!');
};

const debounced = debounce(sayHi, 500);

debounced();
debounced();
debounced();
debounced();
console.log("some time passed first...")
debounced();
debounced();
debounced();
debounced();
console.log("some time passed...")
debounced();
debounced();




const debounceImmediate = (func, wait = 100, immediate = false) => {
  let timeout;
  return (...args) => {
    let callNow = immediate && !timeout;
    
    if (timeout) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout( () => {func(...args)}, wait);
    
  if (callNow)
      func.apply(this, args)   
    
  };
  
}

const efficient = (args) => {
  console.log('second second!!!!' + args);
};

const debounced3 = debounceImmediate(efficient, 500);

efficient(22);
efficient(22);
efficient(333);
efficient(333);

/* prints the following :
some time passed first...
some time passed...
second second!!!!22
hello there!!!!
second second!!!!333
second second!!!!22
*/

    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
