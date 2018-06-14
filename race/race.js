var canvas, canvasContext
var blueCar = new carClass()
var greenCar = new carClass()

window.onload = function () {
	canvas = document.getElementById('gameCanvas')
	canvasContext = canvas.getContext('2d')
	colorRect(0, 0, canvas.width, canvas.height, 'black')
	colorText("Loading...", canvas.width / 2, canvas.height / 2, 'white')

	loadImages()

	startGame()
}

function startGame() {
	const framesPerSecond = 30
	setInterval(updateAll, 1000 / framesPerSecond)

	setupInput()
	blueCar.reset(carPic)
	greenCar.reset(otherCarPic)
}

function updateAll() {
	moveAll()
	drawAll()
}

function moveAll() {
	blueCar.move()
	greenCar.move()
}

function clearScreen() {
	colorRect(0, 0, canvas.width, canvas.height, 'black') // Clear Screen
}

function drawAll() {
	// colorCircle(carX, carY, 10, 'white') // Draw Car
	// clearScreen()
	drawTracks()
	blueCar.draw()
	greenCar.draw()
}
