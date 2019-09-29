/* Given a grid of characters output a decoded message. The message for the following would be IROCLED. (diagonally down right and diagonally up right if you can't go further .. you continue doing this)
I B C A L K A
D R F C A E A
G H O E L A D  

*/

function decodeMessage(arr) {
  const height = arr.length-1, len = arr[0].length;
  let result = [];
  let row=0, index=0;
  let dir = 1;
  
  while (index < len){
    result.push(arr[row][index]);
    
    if(row === 0){
      dir = 1;
    } else if (row === height){
      dir = -1
    }
    row += dir;
    index++;
  }
  return result;

}


console.log(
  decodeMessage([
    ["I", "B", "C", "A", "L", "K", "A"],
    ["D", "R", "F", "C", "A", "E", "A"],
    ["G", "H", "O", "E", "L", "A", "D"]
  ])
);
