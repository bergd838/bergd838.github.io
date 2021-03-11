function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(1);
	background(150)
}

function draw() {
	if(mouseIsPressed == true) {
		fill(255, 182, 193)
		ellipse(mouseX, mouseY, 300, 100);
	} else {
		fill(255, 255, 255)
		rect(mouseX, mouseY, 100, 50);
	}
}