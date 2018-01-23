function makeCanvas() {
	/// Canvas 1
	// get object
	var canvas1 = document.getElementById('canvas1');
	var ctx1 = canvas1.getContext('2d');

	// set properties
	ctx1.font = '35pt Arial';
	ctx1.fillStyle = 'DeepSkyBlue';
	ctx1.strokeStile = 'black';

	// action
	ctx1.fillText('Lorem ipsum', 45, 150);
	ctx1.strokeText('Lorem ipsum', 45, 150);


	/// Canvas 2
	// get object
	var canvas2 = document.getElementById('canvas2');
	var ctx2 = canvas2.getContext('2d');

	// set properties
	ctx2.fillStyle = 'red';
	ctx2.strokeStile = 'black';
	ctx2.lineWidth = 10;

	// make red recangles
	ctx2.fillRect(45, 5, 135, 135);
	ctx2.strokeRect(45, 5, 135, 135);
	
	ctx2.fillRect(200, 150, 135, 135);
	ctx2.strokeRect(200, 150, 135, 135);

	// make gray recangles
	ctx2.fillStyle = 'gray';
	ctx2.fillRect(200, 0, 135, 135);
	ctx2.fillRect(45, 150, 135, 135);

}

