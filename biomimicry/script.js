// // practice code from Intro to JS demo
// console.log("Biomimicry");

// function sayHi() {
// 	console.log('Hi Josephine');
// }
// sayHi();
// sayHi();

// let blogElement = document.querySelector('#blog');
// console.log('my blog element:', blogElement);

// function showSurprise() {
// 	console.log('surprise!');
// }

// let paragraph = document.querySelector('#my-text');
// paragraph.addEventListener('click', showSurprise);

// let haiku = document.querySelector('.haiku');
// haiku.addEventListener('click', function () {
// 	haiku.classList.add('snowfall');
// });

// // practice code for "my first js page"
// let body = document.querySelector('body');
// let randomNumber = Math.round(Math.random()); // returns a number 0 - 1
// if (randomNumber == 0) {
// 	body.classList.add('dark');

// } else {
// 	body.classList.add('light');
// }

// let earthShadow = "earth";

// let total = 0;
// total = total + values[0];
// total = total + values[1];
// total = total + values[2];
// total = total + values[3];

// const average = total / 4;

// for (let value of values) {
// 	total = total + values;
// }

// function calculateAverage(values) {
// 	let total = 0;

// 	for (let value of values) {
// 		total = total + value;
// 	}

// 	const average = total / values.length;
// 	return average;
// }

// const firstAverage = calculateAverage([1,3,5]);
// const secondAverage = calculateAverage([2,10,7]);



$(function(){
    $('.draggable').draggable({
    });
    console.log('You can drag!');
  });


