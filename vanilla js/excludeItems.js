/* The trick is that the most intuitive solution of iterating through the M array and filtering the N array at each element is already written. 
You must come up with a solution that solves the problem in less than O(NM) time. */

const items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
  {color: 'silver', type: 'bed', age: 22},
  {color: 'red', type: 'bed', age: 28},
]
const excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'}
]

function excludeItems(items, excludes) {
  let ans = Array.from(items);
  excludes.forEach (excluding => {
    ans = ans.filter( item => item[excluding.k] !== excluding.v);
  })
  
  return ans;
}



console.log(excludeItems(items,excludes));


console.log(excludeItems2(items,excludes));

/* better than O(nm) ===>  O(n+m) = O(2n) */

function excludeItems2(items, excludes){
  let cat = {};

  items.forEach( (item, idx) => { // O(n?) 
    for ( let [k, v] of Object.entries(item) ){
     if (!cat[k]){
       let value = {};
       value[v] = [idx]
        cat[k] = value;
       // console.log(cat)
      } else if (!cat[k][v]){
          let value = cat[k];
          value[v] = [idx]
          cat[k] = value;
      } else {
        cat[k][v].push(idx);
      }
    }
  })
   // console.log(cat)

  /* data structure looks like this:
cat = {
      color: { red : [],
              blue: [] },
      type: { phone: [],
              tv: [] }
      }
*/

  let excludedItems = [];

  excludes.forEach (ex => {  // O(m) 
    // console.log(ex.k, ex.v)
    let toExclude = cat[ex.k][ex.v];
    // console.log(toExclude)
    excludedItems.push(...toExclude);
  })

  excludedItems = new Set(excludedItems) // O(k) - number of values 
  // console.log(excludedItems);

  let ans = [];  

  items.forEach( (item, i) => { // O(n) 
    if (!excludedItems.has(i)){
      ans.push(item);
    }
  })

  return ans;
}

// ans:
// [ { color: 'red', type: 'bed', age: 28 } ]
