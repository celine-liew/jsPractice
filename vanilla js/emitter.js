function emitter() {
  let events = {};
  /* name: [ ]
    name2: [ ] */
  return {
    'subscribe': (name, callback) => {
      if ( !events[name] ) 
        events[name] = [];
      events[name].push(callback);
      return {
         'release': () => {
           console.log( events[name] )
           
           events[name] &&
        events[name].splice(events[name].indexOf(callback) >>> 0, 1);
           console.log( events[name] )
         }
        
      }
    },
    'emit': (name, ...args) => {
      events[name].forEach( callback => {
        callback.call( null , ...args)
      })
    },
  }  
}

let em = new emitter();

const f = (a,b) => {
  console.log("ffff")
  console.log(a)
  console.log(b)
  console.log(a * b);
}

const i = (a,b) => {
  console.log("IIIIIII")
  console.log(a)
  console.log(b)
  console.log(a * b);
}

let addd = em.subscribe("add", f);
em.subscribe("add", i);
em.emit("add")

addd.release();
console.log(em);
