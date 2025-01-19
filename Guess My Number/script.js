'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

let num;
let val;
document.querySelector('.check').addEventListener('click', function () {
  let value = Number(document.querySelector('.guess').value);

  if (value == 0) {
    document.querySelector('.message').textContent = 'No Number !';
    num = document.querySelector('.score').textContent;
    val = --num;
    document.querySelector('.score').textContent = val;
    console.log(val);
  } else if (value < number) {
    document.querySelector('.message').textContent = 'Number is too Low!';
    num = document.querySelector('.score').textContent;
    val = --num;
    document.querySelector('.score').textContent = val;
    console.log(val);
  } else if (value > number) {
    document.querySelector('.message').textContent = 'Number is too High!';
    num = document.querySelector('.score').textContent;
    val = --num;
    document.querySelector('.score').textContent = val;
    console.log(val);
  } else {
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Number is matched!';
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = val;
    document.querySelector('#Head').innerHTML = 'Winner Winner Chicken Dinner!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Reset game state
  num = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  // Reset UI elements
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = num;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('#Head').innerHTML = 'Guess My Number!';
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#222';
});
