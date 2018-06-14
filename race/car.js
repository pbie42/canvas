var carX = 75
var carY = 75
var carAng = 0
var carSpeed = 0
const KEY_LEFT_ARROW = 37
const KEY_RIGHT_ARROW = 39
const KEY_UP_ARROW = 38
const KEY_DOWN_ARROW = 40
const GROUNDSPEED_DECAY_MULT = 0.94
const DRIVE_POWER = 0.3
const REVERSE_POWER = 0.2
const TURN_RATE = 0.08
const MIN_SPEED_TO_TURN = 0.5

function carReset() {
	for (let eachRow = 0; eachRow < TRACK_ROWS; eachRow++)
		for (let eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
			let arrayIndex = rowColToArrayIndex(eachCol, eachRow)
			if (trackGrid[arrayIndex] === TRACK_PLAYER_START) {
				trackGrid[arrayIndex] = TRACK_ROAD
				carAng = -Math.PI / 2
				carX = eachCol * TRACK_W + TRACK_W / 2
				carY = eachRow * TRACK_H + TRACK_H / 2
			}
		}
}

function carMove() {
	carSpeed *= GROUNDSPEED_DECAY_MULT
	if (keyHeld_Gas) carSpeed += DRIVE_POWER
	if (keyHeld_Reverse) carSpeed -= REVERSE_POWER
	if (Math.abs(carSpeed) > MIN_SPEED_TO_TURN) {
		if (keyHeld_TurnLeft) carAng -= TURN_RATE
		if (keyHeld_TurnRight) carAng += TURN_RATE
	}

	carX += Math.cos(carAng) * carSpeed
	carY += Math.sin(carAng) * carSpeed
}

function drawCar() {
	drawBitmapCenteredWithRotation(carPic, carX, carY, carAng)
}
