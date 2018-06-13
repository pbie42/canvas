var mouseX = 0
var mouseY = 0

var keyHeld_Gas = false
var keyHeld_Reverse = false
var keyHeld_TurnLeft = false
var keyHeld_TurnRight = false

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos)

	document.addEventListener('keydown', keyPressed)
	document.addEventListener('keyup', keyReleased)
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

function keyPressed(e) {
	if (e.keyCode === KEY_LEFT_ARROW) keyHeld_TurnLeft = true
	if (e.keyCode === KEY_RIGHT_ARROW) keyHeld_TurnRight = true
	if (e.keyCode === KEY_UP_ARROW) keyHeld_Gas = true
	if (e.keyCode === KEY_DOWN_ARROW) keyHeld_Reverse = true
	e.preventDefault()
}

function keyReleased(e) {
	if (e.keyCode === KEY_LEFT_ARROW) keyHeld_TurnLeft = false
	if (e.keyCode === KEY_RIGHT_ARROW) keyHeld_TurnRight = false
	if (e.keyCode === KEY_UP_ARROW) keyHeld_Gas = false
	if (e.keyCode === KEY_DOWN_ARROW) keyHeld_Reverse = false
	e.preventDefault()
}
