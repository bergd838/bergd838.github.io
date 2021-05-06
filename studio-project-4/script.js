console.log("colors");

const colors = ['red', 'blue'];
const ranges = {};

for (let i = 0; i < colors.length; i++) {
	if (i === colors.length - 1) {
		ranges[colors[i]] = range(indexOfSlide(`${colors[i]}slide1`) + 1, document.getElementsByClassName('mySlides').length);
	} else {
		ranges[colors[i]] = range(indexOfSlide(`${colors[i]}slide1`) + 1, indexOfSlide(`${colors[i + 1]}slide1`) + 1);
	}
}

function indexOfSlide(id) {
	return [...document.getElementsByClassName('mySlides')].findIndex((i) => i.id === id);
}

function range(from, to) {
	return [...new Array(to - from).keys()].map((i) => i + from);
}

//  function showBlue() {
// 	// var sourceOfPicture = "assets/blue/betyesaar.jpeg";
// 	// var img = document.getElementById('betyesaar')
// 	// img.style.display = "block";
// 	var showbutton = document.getElementById("blueslideshow")
// 	document.getElementById("blueslideshow").style.opacity = "1";
// }

function showRed() {
	showSlides(slideIndex = ranges.red[0]);
}

function showBlue() {
	showSlides(slideIndex = ranges.blue[0]);
}

// function nextArt() {
// 	var sourceOfPicture = "assets/blue/cingasamson.jpeg";
// 	var imgb2 = document.getElementById('cingasamson')
// 	imgb2.style.display = "block";
// 	imgb2.style.zIndex = "100";

// }

// function showBlue() {
// 	var showblues = document.getElementById('.blueslideshow')
// 	document.getElementById('.blueslideshow').style.opacity = "1";
// }

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	document.getElementById('redslideshow').style.opacity = '1';

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";

	const currentColor = Object.entries(ranges).find((i) => i[1].includes(slideIndex))[0];
	document.querySelector(`button#${currentColor}`).style.backgroundColor = currentColor;
	document.querySelectorAll(`.buttons button:not(#${currentColor})`).forEach((button) => {
		button.style.backgroundColor = '';
	});
}
