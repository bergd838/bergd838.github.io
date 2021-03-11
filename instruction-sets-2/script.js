function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(1);
	background(150)
}

function draw() {
	if(mouseIsPressed == true) {
		fill(550, 191, 88)
		ellipse(mouseX, mouseY, 300, 100);
	} else {
		fill(150, 201, 175)
		rect(mouseX, mouseY, 100, 50);
	}
}