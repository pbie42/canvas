const GROUNDSPEED_DECAY_MULT = 0.94
const DRIVE_POWER = 0.3
const REVERSE_POWER = 0.2
const TURN_RATE = 0.08
const MIN_SPEED_TO_TURN = 0.5

function carClass() {
	this.ang = 0
	this.controlKeyDown = 0
	this.controlKeyLeft = 0
	this.controlKeyRight = 0
	this.controlKeyUp = 0
	this.keyHeld_Gas = false
	this.keyHeld_Reverse = false
	this.keyHeld_TurnLeft = false
	this.keyHeld_TurnRight = false
	this.myCarPic = ''
	this.name = "Untitled Car"
	this.speed = 0
	this.x = 75
	this.y = 75

	this.setupInput = function (upKey, downKey, leftKey, rightKey) {
		this.controlKeyUp = upKey
		this.controlKeyDown = downKey
		this.controlKeyLeft = leftKey
		this.controlKeyRight = rightKey
	}

	this.reset = function (whichImage, carName) {
		this.name = carName
		this.myCarPic = whichImage
		this.speed = 0
		for (let eachRow = 0; eachRow < TRACK_ROWS; eachRow++)
			for (let eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
				let arrayIndex = rowColToArrayIndex(eachCol, eachRow)
				if (trackGrid[arrayIndex] === TRACK_PLAYER_START) {
					trackGrid[arrayIndex] = TRACK_ROAD
					this.ang = -Math.PI / 2
					this.x = eachCol * TRACK_W + TRACK_W / 2
					this.y = eachRow * TRACK_H + TRACK_H / 2
					return
				}
			}
	}
	this.move = function () {
		this.speed *= GROUNDSPEED_DECAY_MULT
		if (this.keyHeld_Gas) this.speed += DRIVE_POWER
		if (this.keyHeld_Reverse) this.speed -= REVERSE_POWER
		if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
			if (this.keyHeld_TurnLeft) this.ang -= TURN_RATE
			if (this.keyHeld_TurnRight) this.ang += TURN_RATE
		}

		this.x += Math.cos(this.ang) * this.speed
		this.y += Math.sin(this.ang) * this.speed
		carTrackHandling(this)
	}

	this.draw = function () {
		drawBitmapCenteredWithRotation(this.myCarPic, this.x, this.y, this.ang)
	}
}
