var carPic = document.createElement('img')
var wallPic = document.createElement('img')
var roadPic = document.createElement('img')

var picsToLoad = 0

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImages
	imgVar.src = fileName
}

function countLoadedImages() {
	picsToLoad--
	if (picsToLoad === 0) startGame()
}

function loadImages() {
	var imageList = [
		{
			varName: wallPic,
			theFile: 'track_wall.png'
		},
		{
			varName: roadPic,
			theFile: 'track_road.png'
		},
		{
			varName: carPic,
			theFile: 'player1car.png'
		}
	]

	picsToLoad = imageList.length
	for (let i = 0; i < imageList.length; i++)
		beginLoadingImage(imageList[i].varName, imageList[i].theFile)
}
