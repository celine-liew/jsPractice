function hungryBear(garden) {
  const rowLen = garden.length;
  const coLen = garden[0].length;
  const moves = [[-1,0], 
                 [1,0], 
                 [0, 1],
                 [0, -1]]
  
  let midRowCandidates = findPossibleIndex(rowLen);
  let midColCandidates = findPossibleIndex(coLen);
  // console.log(midRowCandidates, midColCandidates)
  let [midRow, midCol] = getMiddle(midRowCandidates, midColCandidates);
  // console.log([midRow,midCol])
  
  let [currRow, currCol] = [midRow, midCol];
  let count = 0;
  // garden[midRow,midCol] = 0
  
  while (hasMoreMoves()){
    count += garden[currRow][currCol]
    garden[currRow][currCol] = 0;
    let [nextRow, nextCol] = findNextPos([currRow,currCol]);
    [currRow,currCol] = [nextRow, nextCol];
    // console.log(nextRow,nextCol)
  }
   count += garden[currRow][currCol]
   garden[currRow][currCol] = 0;
  
  return count;
  
  
  function hasMoreMoves() {
    // console.log(moves.some(isValidPos))
    return moves.some(isValidPos)
  }
  
  function isValidPos(pos){
    let r = currRow + pos[0]
    let c = currCol + pos[1]
    // console.log(r,c)
    return (garden[r] && garden[r][c] && garden[r][c] > 0)
  }
  
  function findNextPos([r,c]){
    let max = 0;
    let [row,col] = [-1,-1];
    
    for (let move of moves){
      let checkRow = r+move[0], checkCol = c+move[1];
      if (checkRow < 0 || checkRow >= rowLen || checkCol < 0 || checkCol >= coLen){
        continue;
      }
      let check = garden[checkRow][checkCol];
      if (check && check > max){
        max = check;
        [row,col] = [checkRow, checkCol]
      }
    }
    return [row,col];
  }
  
  function getMiddle(rows,cols){
    let max = 0;
    let [r,c] = [-1,-1];
        
    for (let row of rows){
      for (let col of cols){
        let candidate = garden[row][col];
        if (candidate > max){
          max = candidate;
          [r,c] = [row,col]
        }
      }
    }
    return [r,c];
  }
  
  function findPossibleIndex(len){
    let midPos = [];
    
    let p = Math.floor(len / 2);
    midPos.push(p)
    if (isEven(len)){
      midPos.push(p-1);
    }
    return midPos;
  }
  
  function isEven(num){
    return (num % 2 === 0)
  }
  
  
  
  
  
}

const garden = 
      [
        [5, 7, 8, 6, 3],
        [0, 0, 7, 0, 4],
        [4, 6, 3, 4, 9],
        [3, 1, 0, 5, 8]
    ];

console.log(hungryBear(garden));
