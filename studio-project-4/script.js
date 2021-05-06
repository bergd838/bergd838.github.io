console.log("colors");

//  function showBlue() {
// 	// var sourceOfPicture = "assets/blue/betyesaar.jpeg";
// 	// var img = document.getElementById('betyesaar')
// 	// img.style.display = "block";
// 	var showbutton = document.getElementById("blueslideshow")
// 	document.getElementById("blueslideshow").style.opacity = "1";
// }

function showRed() {
	var showredslides = document.getElementById("redslideshow")
	document.getElementById("redslideshow").style.opacity = "1";
	// document.querySelector("#red").style.backgroundColor = "red";
}

function showBlue(){
	// var showblueslides = document.getElementById("blueslideshow")
	// document.getElementById("blueslideshow").style.opacity = "0";
	// var hideredslides = document.getElementById("redslideshow")
	// document.getElementById("redslideshow").style.opacity = "0";
	var showredslides = document.getElementById("redslideshow")
	document.getElementById("redslideshow").style.opacity = "1";
	var element = document.getElementById("blueslide1");
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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
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

