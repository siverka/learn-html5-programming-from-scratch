function makeCanvas() {
	/// Canvas 1
	// get object
	var canvas1 = document.getElementById('canvas1');
	var ctx1 = canvas1.getContext('2d');

	// set properties
	ctx1.font = '35pt Arial';
	ctx1.fillStyle = 'DeepSkyBlue';
	ctx1.strokeStyle = 'black';

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


	/// Lines
	// get object
	var canvas3 = document.getElementById('canvas3');
	var ctx3 = canvas3.getContext('2d');

	// set properties
	ctx3.strokeStyle = 'gray';
	ctx3.fillStyle = 'red';
	ctx3.lineWidth = 5;

	// draw lines
	ctx3.beginPath();
	ctx3.moveTo(100, 100);
	ctx3.lineTo(150, 200);
	ctx3.lineTo(200, 200);
	ctx3.lineTo(200, 290);
	ctx3.lineTo(290, 290);
	ctx3.lineTo(290, 100);
	ctx3.moveTo(100, 100);
	ctx3.stroke();
	ctx3.fill();
	ctx3.closePath();


	/// Circles
	// get object
	var canvas4 = document.getElementById('canvas4');
	var ctx4 = canvas4.getContext('2d');

	// set blue circle properties
	ctx4.fillStyle = 'blue';
	// draw blue circle
	ctx4.beginPath();
	ctx4.arc(200, 30, 25, 0, 2 * Math.PI);
	ctx4.fill();
	ctx4.closePath();

	// set red circle properties
	ctx4.fillStyle = 'red';
	// draw red circle
	ctx4.beginPath();
	ctx4.arc(200, 100, 45, 0, 2 * Math.PI);
	ctx4.fill();
	ctx4.closePath();

	// set red circle properties
	ctx4.fillStyle = 'black';
	// draw red circle
	ctx4.beginPath();
	ctx4.arc(200, 220, 75, 0, 2 * Math.PI);
	ctx4.fill();
	ctx4.closePath();


	/// Animation
	// get object
	var canvas5 = document.getElementById('canvas5');
	var ctx5 = canvas5.getContext('2d');

	var posX = 0;
	var posY = 0;
	setInterval(function(){
		posX += 1;
		posY += 1;
		ctx5.fillStyle = 'black';
		ctx5.fillRect(0, 0, canvas5.width, canvas5.height);
		
		ctx5.fillStyle = 'white';
		ctx5.beginPath();
		ctx5.arc(posX, 120, 55, 0, 2 * Math.PI);
		ctx5.fill();
		ctx5.closePath();

		ctx5.fillStyle = 'red';
		ctx5.beginPath();
		ctx5.arc(150, posY, 55, 0, 2 * Math.PI);
		ctx5.fill();
		ctx5.closePath();

	}, 30)
}


