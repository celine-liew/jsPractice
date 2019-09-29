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



