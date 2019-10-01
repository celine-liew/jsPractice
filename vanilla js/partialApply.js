/* partial apply e.g. prefixing scheme http without duplicating code */


function fixUriScheme(scheme){
  return  function makeUriwithscheme(domain, path){
    return buildUri(scheme, domain, path);
  }
}
  
function buildUri (scheme, domain, path){
  return `${scheme}://${domain}/${path}`;
}
  
const buildHttpsUri = fixUriScheme('https')

const twitterFavicon = buildHttpsUri('twitter.com', 'favicon.ico')
const googleHome = buildHttpsUri('google.com', '')

console.log(twitterFavicon) // https://twitter.com/favicon.ico
console.log(googleHome) // https://google.com/


const partialApply = (fn, ...input1) => {
  return (...input2) => {
    return fn.apply( this, input1.concat(input2));
  }
}

/* or this way */

const partialApply2 = (fn, input1) => {
  return (input2) => {
    return fn.apply( this, [input1, input2]);
  }
}


const add = (a,b) => a+b;
let add5 = partialApply(add, 5);

console.log(add5(10)) // 15


let add10 = partialApply2(add, 10);

console.log(add10(10)) //20



