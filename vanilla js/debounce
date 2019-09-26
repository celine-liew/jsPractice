const debounce = (func, wait = 100) => {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout( () => {func(...args)}, wait);
    
  };
  
}

const sayHi = debounce(() => {
  console.log('hello there!!!!');
});

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

const efficient = debounceImmediate((args) => {
  console.log('second second!!!!' + args);
});

const debounced2 = debounceImmediate(efficient, 900, true);
const debounced3 = debounceImmediate(efficient, 500);

debounced2(22);
debounced2(22);
debounced3(333);
debounced3(333);
