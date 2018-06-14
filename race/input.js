var mouseX = 0
var mouseY = 0

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

function keySet(setTo) {
	if (e.keyCode === KEY_LEFT_ARROW) keyHeld_TurnLeft = setTo
	if (e.keyCode === KEY_RIGHT_ARROW) keyHeld_TurnRight = setTo
	if (e.keyCode === KEY_UP_ARROW) keyHeld_Gas = setTo
	if (e.keyCode === KEY_DOWN_ARROW) keyHeld_Reverse = setTo
}

function keyPressed(e) {
	keySet(true)
	e.preventDefault()
}

function keyReleased(e) {
	keySet(false)
	e.preventDefault()
}
