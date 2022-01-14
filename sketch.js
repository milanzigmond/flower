function setup() {
	createCanvas(innerWidth, innerHeight)
	angleMode(DEGREES)
	rectMode(CENTER)
	// noLoop()
}

function draw() {
	background(30)
	noFill()

	translate(width / 2, height / 2)

	for (let i = 0; i < 165; i += 4) {
		push()

		let r = map(sin(frameCount / 4), -1, 1, 255, 25)
		let g = map(cos(frameCount * 2), -1, 1, 25, 255)
		let b = map(sin(frameCount / 2), -1, 1, 25, 255)
		stroke(r, g, b)

		rotate(sin(frameCount + i) * 20)
		rect(0, 0, 500 - i * 3, 500 - i * 3, 180 - i)
		pop()
	}
}
