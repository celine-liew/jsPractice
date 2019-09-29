/*Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5 */


function fizzBuzz() {
  for (let i = 1; i <= 100; i++){
    if (i % 5 && i % 3){
      console.log(i);
      continue;
    }
    let string='';
    if (i%3===0){
      string+="fizz"
    }
    if (i%5===0){
      string+="buzz"
    }
    console.log(string)
  }
}

fizzBuzz();
