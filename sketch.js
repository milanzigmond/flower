let sliderSW
let sliderSWValue
let sliderRepeat
let sliderRepeatValue
let sliderDistance
let sliderDistanceValue
let sliderRotation
let sliderRotationValue

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
	sliderDistanceValue.html(sliderDistance.value())
	sliderRotationValue.html(sliderRotation.value())

	let angle = 360 / repeat

	translate(width / 2, height / 2)

	for (let i = 0; i < repeat; i++) {
		strokeWeight(sw)
		drawDistance()
		rotate(angle)
	}
}

function doubleClicked() {
	if (isLooping()) noLoop()
	else loop()
}

function drawDistance() {
	for (let i = 0; i <= 255; i += sliderDistance.value()) {
		push()

		let h = floor(map(sin(i * frameCount * 0.001), -1, 1, 10, 255))
		let s = floor(map(cos(i * frameCount * 0.0001), -1, 1, 10, 100))
		let b = floor(map(sin(i * frameCount * 0.002), -1, 1, 10, 100))
		let a = map(i, 0, 255, 0.4, 0)

		// if (i % 2 > 0) {
		// 	stroke("hsba(" + h + ", " + s + "%, " + b + "%, " + a + ")")
		// 	rotate(cos(frameCount / 2 + i) * sliderRotation.value())
		// 	rect(0, 0, i * 3, i * 3, i / 2)
		// } else {
		stroke("hsba(" + h + ", " + b + "%, " + s + "%, " + a + ")")
		rotate(sin(frameCount / 2 + i) * sliderRotation.value())
		rect(0, 0, i * 3, i * 3, i / 2)
		// }

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

	let pRe = createP("REPEAT")
	pRe.style("font-size", "12px")
	pRe.style("color", "white")
	pRe.position(10, 50)
	sliderRepeat = createSlider(1, 12, 6, 1)
	sliderRepeat.position(10, 80)
	sliderRepeat.style("width", "100px")
	sliderRepeatValue = createElement("h1")
	sliderRepeatValue.style("font-size", "16px")
	sliderRepeatValue.style("color", "white")
	sliderRepeatValue.position(120, 70)

	let pD = createP("DISTANCE")
	pD.style("font-size", "12px")
	pD.style("color", "white")
	pD.position(10, 100)
	sliderDistance = createSlider(1, 100, 20, 1)
	sliderDistance.position(10, 130)
	sliderDistance.style("width", "100px")
	sliderDistanceValue = createElement("h1")
	sliderDistanceValue.style("font-size", "16px")
	sliderDistanceValue.style("color", "white")
	sliderDistanceValue.position(120, 120)

	let pRo = createP("ROTATION")
	pRo.style("font-size", "12px")
	pRo.style("color", "white")
	pRo.position(10, 150)
	sliderRotation = createSlider(1, 180, 50, 1)
	sliderRotation.position(10, 180)
	sliderRotation.style("width", "100px")
	sliderRotationValue = createElement("h1")
	sliderRotationValue.style("font-size", "16px")
	sliderRotationValue.style("color", "white")
	sliderRotationValue.position(120, 170)
}
