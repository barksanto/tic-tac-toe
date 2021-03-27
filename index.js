// select each box
const one = document.querySelector('.one'),
  two = document.querySelector('.two'),
  three = document.querySelector('.three'),
  four = document.querySelector('.four'),
  five = document.querySelector('.five'),
  six = document.querySelector('.six'),
  seven = document.querySelector('.seven'),
  eight = document.querySelector('.eight'),
  nine = document.querySelector('.nine');

// add each box into array
const boxes = [one, two, three, four, five, six, seven, eight, nine];
// add onclick listener for each box
let firstPlayer = true;

const selectBox = (event) => {
  if (firstPlayer) {
    event.target.innerHTML = '🐶';
  } else {
    event.target.innerHTML = '🐱';
  }
  return firstPlayer = !firstPlayer
}

boxes.map((element) => element.addEventListener('click', selectBox));


