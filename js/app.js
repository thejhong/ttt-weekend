// /*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/
let tttboard, turn, winner 

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.getElementById('board')
const messageEl = document.getElementById('message')





/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('body').addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
init ()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render();
}

function render(function(square, index)){
  if (tttboard === 1) {
    num.textContent = "X";
  } else if (tttboard === -1) {
    num.textContent = "0";
  }  else if (tttboard === null){
    num.textContent = "";
  }
}

  if (winner === 'T') {
    messageEl.textContent = "It's a tie.";
  } else if (winner === 1){
    messageEl.textContent = "Player 1 has won."
  } else if (winner === -1) {
    messageEl.textContent = "Player 2 has won."
  }


  function handleClick(evt) {
    const sqIdx = parseInt(evt.target.id(2))
   if (board[sqIdx] != null) {

   }
   return
     }
     if (winner != null) {
    return
     }
     board.splice(sqIdx, 1, turn)
     turn *= -1
     getWinner(
       render()
     )
  


