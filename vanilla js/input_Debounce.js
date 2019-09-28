/*  If you were building a search tool and wanted search results to pop up as you typed but the server call was taxing, write a function that gets called on every key down but calls the server when the user stops typing for 400ms.  */

// wait for typing to stop - debounce server call

let textInput = document.getElementById('input');


const debounce = (func, wait = 100, immediate = false) => {
  let timeout;
  
  return (...args) => {
    let callNow = immediate && !timeout;
    
    if (timeout)
      clearTimeout(timeout);
    timeout = setTimeout(() => {func.apply(this,args);}, wait);
    
    if (callNow)
      func.apply(this, args)    
  };  
}

textInput.onkeyup = () => {
  console.log("calling server here: " + textInput.value);
  };

const keyupDebounced = debounce(textInput.onkeyup, 500, true)


// helper
const myHandler = (event) => // do something with the event
const dHandler = debounced(200, myHandler);
element.addEventListener("input", dHandler);
// any HTML DOM Events
