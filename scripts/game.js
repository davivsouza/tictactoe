
let boards = ["", "", "", "", "", "", "", "", ""];
let playerTurn = 0;
let symbols = ["Zoro", "Luffy"];
let gameOver = false;
let winner;

let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 4, 6],
  [0, 4, 8],
  [0, 3, 6],
  [2, 5, 8],
];

function handleMove(position) {
  if (!gameOver) {
    if (boards[position] == "") {
      boards[position] = symbols[playerTurn];

      gameOver = isWin()

      playerTurn = (playerTurn == 0) ? 1 : 0
      
    }
  
  }
  return gameOver //true
}

function isWin() {
 
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];//2 - [6,7,8] [0] == 6 [1] == 7  [2] == 8

    let pos1 = seq[0];//6
    let pos2 = seq[1];//7
    let pos3 = seq[2];//8
   
    console.log(pos1);
  
    if (
      boards[pos1] == boards[pos2] &&
      boards[pos1] == boards[pos3] &&
      boards[pos1] != ""
    ) {
      winner = boards[pos1]
      return true;
      
    }
  }

  return false;
}
