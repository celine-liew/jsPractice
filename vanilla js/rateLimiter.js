/*Rate Limiting or throttle */

// function limiter(fn, wait) {
//   let isCalled = false;
  
//   return () => {
//     if (!isCalled){
//       fn();
//       isCalled = true;
//       setTimeout( ()=> {
//         isCalled = false;
//       }, wait)
//     }
//   };
// }

/* do not want to drop the calls but to queue them up */

function limiter(fn, wait){
    let isCalled = false,
        calls = [];

    let caller = () => {
        if (calls.length && !isCalled){
            isCalled = true;
            calls.shift()()
            // fun.call();
            setTimeout( () => {
                isCalled = false;
                caller();
            }, wait);
        }
    };

    return (...args) => {
        debugger;
        calls.push(fn.bind(null, ...args));
        // let args = Array.prototype.slice.call(arguments);
        // calls.push(fn.bind.apply(fn, [this].concat(args)));

        caller();
    };
}

const logMessageLimited = limiter(msg => { console.log(msg); }, 500);

for (let i = 0; i < 3; i++){
    logMessageLimited(`[Message Log] Action (${i}) rate limited.`);
}
