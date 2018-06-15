const KEY_LEFT_ARROW = 37
const KEY_RIGHT_ARROW = 39
const KEY_UP_ARROW = 38
const KEY_DOWN_ARROW = 40
const KEY_W = 87
const KEY_A = 65
const KEY_S = 83
const KEY_D = 68

var mouseX = 0
var mouseY = 0

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos)

	document.addEventListener('keydown', keyPressed)
	document.addEventListener('keyup', keyReleased)

	greenCar.setupInput(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW, KEY_RIGHT_ARROW)
	blueCar.setupInput(KEY_W, KEY_S, KEY_A, KEY_D)
}

function updateMousePos(e) {
	var rect = canvas.getBoundingClientRect()
	var root = document.documentElement

	mouseX = e.clientX - rect.left - root.scrollLeft
	mouseY = e.clientY - rect.top - root.scrollTop

	// Test Cheat
	// carX = mouseX
	// carY = mouseY
	// carSpeedX = 4
	// carSpeedY = -4
}

function keySet(keyEvent, whichCar, setTo) {
	if (keyEvent.keyCode === whichCar.controlKeyLeft)
		whichCar.keyHeld_TurnLeft = setTo
	if (keyEvent.keyCode === whichCar.controlKeyRight)
		whichCar.keyHeld_TurnRight = setTo
	if (keyEvent.keyCode === whichCar.controlKeyUp)
		whichCar.keyHeld_Gas = setTo
	if (keyEvent.keyCode === whichCar.controlKeyDown)
		whichCar.keyHeld_Reverse = setTo
}

function keyPressed(e) {
	keySet(e, blueCar, true)
	keySet(e, greenCar, true)
	e.preventDefault()
}

function keyReleased(e) {
	keySet(e, blueCar, false)
	keySet(e, greenCar, false)
	e.preventDefault()
}
