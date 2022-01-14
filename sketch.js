function setup() {
	createCanvas(innerWidth, innerHeight)
	angleMode(DEGREES)
	rectMode(CENTER)
	colorMode(HSB, 255, 100, 100)
	// noLoop()
}

function draw() {
	background(0)
	noFill()

	translate(width / 2, height / 2)

	for (let i = 0; i < 6; i++) {
		strokeWeight(10)
		drawSquares()
		rotate(45)
	}
}

function mouseClicked() {
	if (isLooping()) noLoop()
	else loop()
}

function drawSquares() {
	for (let i = 0; i <= 255; i += 20) {
		push()

		let h = floor(map(sin(i * frameCount * 0.001), -1, 1, 0, 255))
		let s = floor(map(cos(i * frameCount * 0.003), -1, 1, 0, 100))
		let b = floor(map(sin(i * frameCount * 0.002), -1, 1, 0, 100))
		let a = map(i, 0, 255, 0.4, 0)

		if (i % 2 > 0) {
			stroke("hsba(" + h + ", " + s + "%, " + b + "%, " + a + ")")
			rotate(cos(frameCount / 2 + i * 2) * 10)
			rect(0, 0, i * 3, i * 3, i / 2)
		} else {
			stroke("hsba(" + h + ", " + s + "%, " + b + "%, " + a + ")")
			rotate(sin(frameCount / 2 + i * 2) * 20)
			rect(0, 0, i * 3, i * 3, i / 2)
		}
		// beginShape()
		// vertex(0, 0)
		// vertex(i * 4, 0)
		// vertex(i * 4, i * 4)
		// vertex(0, i * 4)
		// endShape(CLOSE)

		pop()
	}
}
