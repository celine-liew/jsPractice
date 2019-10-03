class Emitter{
  constructor(){
    this.events = {};
  }
  
  subscribe(name, callback) {
    if (!this.events[name])
      this.events[name] = [callback];
    else
      this.events[name].push(callback);
    
    console.log(this.events)
    
    return {
      release: () => {
        console.log("releasing name "+name)
        this.events[name] = this.events[name].filter( (cb) => cb != callback);
        console.log(this.events)
      }
    }
  }
  
  emit(name){
    // assume that name exists
    let args = [].slice.call(arguments,1)
    console.log("args:"+ args)
    this.events[name] && this.events[name].forEach( cb => {
      cb.apply(null, args);
    })
  }
                              
                                  
}

const printHello = (...args) => {
  let res = "hello world " + args;
  console.log(res);
}

const sayByeeee = (...args) => {
  let res = "byeeee " + args;
  console.log(res);
}

const numberss = (arg) => {
  console.log(arg*2);
}

let em = new Emitter();
let sub1 = em.subscribe("hello", printHello)
let sub4 = em.subscribe("hello",sayByeeee);
// console.log(sub1)
em.emit("hello", "kitty", "money")
sub1.release();
// console.log(sub1)
let sub2 = em.subscribe("numbs", numberss);
em.emit("numbs", 5)

let em2 = new Emitter();
let emsub = em2.subscribe("bye", sayByeeee);
// console.log(emsub)
