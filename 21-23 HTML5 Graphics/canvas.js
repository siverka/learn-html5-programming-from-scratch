function makeCanvas() {
	// Get object
	var canvas1 = document.getElementById("canvas1");
	var ctx1 = canvas1.getContext('2d');

	// Set properties
	ctx1.font = "35pt Arial";
	ctx1.fillStyle = "DeepSkyBlue";
	ctx1.strokeStile = "black";

	// Action
	ctx1.fillText("Lorem ipsum", 45, 150);

}

