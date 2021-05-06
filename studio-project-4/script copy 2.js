console.log("colors");

//  function showBlue() {
// 	// var sourceOfPicture = "assets/blue/betyesaar.jpeg";
// 	// var img = document.getElementById('betyesaar')
// 	// img.style.display = "block";
// 	var showbutton = document.getElementById("blueslideshow")
// 	document.getElementById("blueslideshow").style.opacity = "1";
// }

const ranges = {
	red: range(1, indexOfSlide('blueslide1') + 1),
	blue: range(indexOfSlide('blueslide1') + 1, document.getElementsByClassName('mySlides').length)
};
function indexOfSlide(id) {
	return [...document.getElementsByClassName('mySlides')].findIndex((i) => i.id === id);
}
function range(from, to) {
	return [...new Array(to - from).keys()].map((i) => i + from);
}

function showRed() {
	showSlides(slideIndex = ranges.red[0]);
	// var showredslides = document.getElementById("redslideshow")
	// document.getElementById("redslideshow").style.opacity = "1";
	// document.querySelector("#red").style.backgroundColor = "red";
}

function showBlue(){
	// var showblueslides = document.getElementById("blueslideshow")
	// document.getElementById("blueslideshow").style.opacity = "0";
	// var hideredslides = document.getElementById("redslideshow")
	// document.getElementById("redslideshow").style.opacity = "0";
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
	const color = Object.entries(ranges).find((i) => i[1].includes(n))[0];
	document.querySelector(`button#${color}`).style.backgroundColor = color;
	document.querySelectorAll(`.buttons button:not(#${color})`).forEach((button) => {
		button.style.backgroundColor = '';
	});

  var i;
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
  dots[slideIndex-1].className += " active";
}

