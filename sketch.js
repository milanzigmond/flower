let sliderSW
let sliderRepeat
let sliderSWValue
let sliderRepeatValue

function setup() {
	createCanvas(innerWidth, innerHeight)
	angleMode(DEGREES)
	rectMode(CENTER)
	colorMode(HSB, 255, 100, 100)
	// noLoop()

	// sliders
	createSliders()
}

function draw() {
	background(0)
	noFill()

	let sw = sliderSW.value()
	let repeat = sliderRepeat.value()
	sliderSWValue.html(sw)
	sliderRepeatValue.html(repeat)

	let angle = 360 / repeat

	translate(width / 2, height / 2)

	for (let i = 0; i < repeat; i++) {
		strokeWeight(sw)
		drawSquares()
		rotate(angle)
	}
}

function doubleClicked() {
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

		pop()
	}
}

function createSliders() {
	let pSW = createP("STROKE WEIGHT")
	pSW.style("font-size", "12px")
	pSW.style("color", "white")
	pSW.position(10, 0)
	sliderSW = createSlider(1, 100, 4, 1)
	sliderSW.position(10, 30)
	sliderSW.style("width", "100px")
	sliderSWValue = createElement("h1")
	sliderSWValue.style("font-size", "16px")
	sliderSWValue.style("color", "white")
	sliderSWValue.position(120, 20)

	let pR = createP("REPEAT")
	pR.style("font-size", "12px")
	pR.style("color", "white")
	pR.position(10, 50)
	sliderRepeat = createSlider(1, 12, 6, 1)
	sliderRepeat.position(10, 80)
	sliderRepeat.style("width", "100px")
	sliderRepeatValue = createElement("h1")
	sliderRepeatValue.style("font-size", "16px")
	sliderRepeatValue.style("color", "white")
	sliderRepeatValue.position(120, 70)
}
