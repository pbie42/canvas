var carPic = document.createElement('img')
var trackPics = []

var picsToLoad = 0

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImages
	imgVar.src = "images/" + fileName
}

function countLoadedImages() {
	picsToLoad--
	if (picsToLoad === 0) startGame()
}

function loadImageForTrackCode(trackCode, fileName) {
	trackPics[trackCode] = document.createElement('img')
	beginLoadingImage(trackPics[trackCode], fileName)
}

function loadImages() {
	var imageList = [
		{
			varName: carPic,
			theFile: 'player1car.png'
		},
		{
			trackType: TRACK_WALL,
			theFile: 'track_wall.png'
		},
		{
			trackType: TRACK_ROAD,
			theFile: 'track_road.png'
		},
		{
			trackType: TRACK_FLAG,
			theFile: 'track_flag.png'
		},
		{
			trackType: TRACK_GOAL,
			theFile: 'track_goal.png'
		},
		{
			trackType: TRACK_TREE,
			theFile: 'track_tree.png'
		}
	]

	picsToLoad = imageList.length
	for (let i = 0; i < imageList.length; i++) {
		if (imageList[i].varName !== undefined)
			beginLoadingImage(imageList[i].varName, imageList[i].theFile)
		else {
			loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile)
		}
	}
}
