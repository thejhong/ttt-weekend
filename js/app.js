// Step 1 - Define the required variables used to track the state of the game

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

// a) Use a variable named `board` to represent the state of the squares on
//    the board.
let board 
// b) Use a variable named `turn` to track whose turn it is.
let turn
// c) Use a variable named `winner` to represent if anyone has won yet, or if 
//    a tie has occurred.
let winner
// Step 2 - Store cached element references

// a) In a constant called `squareEls`, store the nine elements representing 
//    the squares on the page.
const squareEls = document.querySelectorAll(".board-div")
// b) In a constant called `messageEl`, store the element that displays the 
//    game's status on the page.
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("button")

squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
})
resetBtnEl.addEventListener('click', init)

  
// Step 3 - Upon loading, the game state should be initialized, and a function 
//          should be called to render this game state

  // a) Create a function called `init`.
init()
  // b) Call this `init` function when the app loads.
function init () {


  // c) Set the `board` variable to an array containing nine `null`s to 
  //    represent empty squares.
board = [null, null, null, null, null,null, null, null, null ] 
  // d) Set the `turn` to `1` - which will represent player X.
turn = 1
  // e) Set the `winner` to `null`.
winner = null
  // f) Call a function called `render` at the end of the `init` function.
render ()
// Step 4 - The state of the game should be rendered to the user
}
  // a) Create a function called `render`.
function render() {
  // b) Loop over `board` and for each element:
  //    - Use the current index of the iteration to access the corresponding 
  //      square in the `squareEls` array.
  //    - Style that square however you wish, dependent on the value contained 
  //      in the current cell being iterated over (`-1`, `1`, or `null`).
board.forEach(function(square, idx){
  if (square === 1) {
  squareEls[idx].textContent ='X'
  } else if (square === -1) {
  squareEls[idx].textContent = 'O'
  } else if (square === null) {
  squareEls[idx].textContent = null
  }}
  )

  // c) Render a message based on the current game state:
  //    - If winner has a value of `null` (meaning the game is still in
  //      progress), render whose turn it is.
  //    - If `winner` is equal to `'T'` (tie), render a tie message.
  //    - Otherwise, render a congratulatory message to the player that has won.
if (winner === null) {
  turn ===1 ? messageEl.textContent = "Player 1 turn": messageEl.textContent = "Player 2 turn"
} else if (winner === "T") {
  messageEl.textContent = "It's a tie"
} else {
  winner === 1 ? messageEl.textContent = "Player 1 has won!" : messageEl.textContent = "Player 2 has won!"
}}

// Step 5 - Define the required constants

  // a) In a constant called `winningCombos` define the eight possible winning 
  //    combinations as an array of arrays.
  

// Step 6 - Handle a player clicking a square with a `handleClick` function

  // a) Create a function called `handleClick`. It will have an `evt` parameter.

function handleClick(evt) {
  // b) Attach an event listener to the game board. On the `'click'` event, it 
  //    should call the `handleClick` function you created in 6a.

  // c) Obtain the index of the square that was clicked by "extracting" the 
  //    index from an `id` assigned to the element in the HTML. Assign this to 
  //    a constant called `sqIdx`.
  const sqIdx = parseInt(evt.target.id.slice(2))
  // d) If the `board` has a value at the `sqIdx`, immediately `return` because 
  //    that square is already taken. Also, if `winner` is not `null`
  //    immediately `return` because the game is over.
  if (board[sqIdx] !== null || winner !== null) {
    return
  } 

 

  // e) Update the `board` array at the `sqIdx` with the current value of
  //    `turn`.
  board[sqIdx] = turn
  // f) Change the turn by multiplying `turn` by `-1` (this flips a `1` to
  //    `-1`, and vice-versa).
turn = turn *= -1
  // g) Set the `winner` variable if there's a winner by calling a new 
  //    function: `getWinner`.
getWinner ()
  // h) All the state has been updated so we need to render our updated state 
  //    to the user by calling the `render` function we wrote earlier.
render()
}

// Step 7 - Build the `getWinner` function

  // a) Create a function called `getWinner`
function getWinner () {
  /* 
   * There are two methods you can use to find out if there is a winner.
   *
   * Step b1 below is a more elegant method that takes advantage of the
   * `winningCombos` array you wrote above in step 5. 
   *
   * Step b2 might be a little simpler to comprehend, but you'll need to write  
   * more code. Step b2 also won't take advantage of the `winningCombos`
   * array, but using it as a reference will help you build a solution.
   * ***Ensure you choose only one path.***
   */

  // b1) Loop through each of the winning combination arrays defined in the 
  //     `winningCombos` array. Total up the three board positions using the 
  //     three indexes in the current combo. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at
  //     the index specified by the first index of that winning combination's
  //     array by returning that value.

  // b2) For each one of the winning combinations you wrote in step 5, find the
  //     total of each winning combination. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at 
  //     the index specified by the first index of that winning combination's 
  //     array by returning that value.

  // c) If there is no winner, check to see if there is a tie. Set the `winner` 
  //    variable to `'T'` if there are no more nulls in the board array by 
  //    returning the string `'T'`.

  // d) If there is no winner and there isn’t a tie, return `null`.

  for (let i = 0; i < winningCombos.length; i++) {
  if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === 3) {
    winner = 1
} else if
  (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === -3) {
  winner = -1
} else {
  return null
}}
  render()
}
  

// Step 8 - Create Reset functionality

  // a) Add a reset button to the HTML document.

  // b) Store the new reset button element in a constant named `resetBtnEl`.

  // c) Attach an event listener to the `resetBtnEl`. On the `'click'` event it 
  //    should call the `init` function you created in 3.
 


