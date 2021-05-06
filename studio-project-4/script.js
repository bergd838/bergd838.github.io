console.log("colors");


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
}

function showBlue(){
	showSlides(slideIndex = ranges.blue[0]);
}

function showYellow() {
	showSlides(slideIndex = ranges.yellow[0]);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

	  var i;
	document.getElementById('redslideshow').style.opacity = '1';
const color = Object.entries(ranges).find((i) => i[1].includes(n))[0];
document.querySelector(`button#${color}`).style.backgroundColor = color;
document.querySelectorAll(`.buttons button:not(#${color})`).forEach((button) => {
	button.style.backgroundColor = '';
});

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
  // slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";


	const currentColor = Object.entries(ranges).find((i) => i[1].includes(slideIndex))[0];
	document.querySelector(`button#${currentColor}`).style.backgroundColor = currentColor;
	document.querySelectorAll(`.buttons button:not(#${currentColor})`).forEach((button) => {
    button.style.backgroundColor = '';
});


