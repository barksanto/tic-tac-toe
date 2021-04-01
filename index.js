const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

const cellElements = document.querySelectorAll('[data-cell]');

let circleTurn;

cellElements.forEach(cell => {
  // only fire this event listener once
  cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(event) {
  const cell = event.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  // place the mark
  placeMark(cell, currentClass);
  circleTurn = !circleTurn
  //check for win

  //check for draw

  //switch turns
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}







// // select each box
// const one = document.querySelector('.one'),
//   two = document.querySelector('.two'),
//   three = document.querySelector('.three'),
//   four = document.querySelector('.four'),
//   five = document.querySelector('.five'),
//   six = document.querySelector('.six'),
//   seven = document.querySelector('.seven'),
//   eight = document.querySelector('.eight'),
//   nine = document.querySelector('.nine');

// // add each box into array
// const boxes = [one, two, three, four, five, six, seven, eight, nine];
// // add onclick listener for each box - alternates icon pushed to inner html
// // variable that alternates - first player is always dog
// let firstPlayer = true;

// const selectBox = (event) => {
//   if (firstPlayer) {
//     event.target.innerHTML = '🐶';
//   } else {
//     event.target.innerHTML = '🦥';
//   }
//   checkWinner();
//   return firstPlayer = !firstPlayer
// }
// boxes.map((element) => element.addEventListener('click', selectBox));

// // find rows, cols and diagonals
// const rows = [[one, two, three], [four, five, six], [seven, eight, nine]];
// // const columns = [[one, four, seven], [two, five, eight], [three, six, nine]];
// // const diagonals = [[one, four, nine], [three, five, seven]];

// const poss1 = [one, two, three];
// const poss2 = [four, five, six];
// const poss3 = [seven, eight, nine];
// const poss4 = [one, four, seven];
// const poss5 = [two, five, eight];
// const poss6 = [three, six, nine];
// const poss7 = [one, five, nine];
// const poss8 = [three, five, seven];

// // const checkWinner = () => {
// //   // if (one.innerHTML === '🐶' && two.innerHTML === '🐶' && three.innerHTML === '🐶') {
// //   //   console.log('dog wins this one')
// //   // }
// //   rows.map(row => row.every(element => element.innerHTML === '🐶'))
// // }

// const checkWinner = () => {
//   poss1.every(element => element.innerHTML === '🐶');
//   poss2.every(element => element.innerHTML === '🐶');
//   poss3.every(element => element.innerHTML === '🐶');
//   poss4.every(element => element.innerHTML === '🐶');
//   poss5.every(element => element.innerHTML === '🐶');
//   poss6.every(element => element.innerHTML === '🐶');
//   poss7.every(element => element.innerHTML === '🐶');
//   poss8.every(element => element.innerHTML === '🐶');
//   poss1.every(element => element.innerHTML === '🦥');
//   poss2.every(element => element.innerHTML === '🦥');
//   poss3.every(element => element.innerHTML === '🦥');
//   poss4.every(element => element.innerHTML === '🦥');
//   poss5.every(element => element.innerHTML === '🦥');
//   poss6.every(element => element.innerHTML === '🦥');
//   poss7.every(element => element.innerHTML === '🦥');
//   poss8.every(element => element.innerHTML === '🦥');
// }
// if (checkWinner) {
//   console.log("somebody won!!!!")
// }