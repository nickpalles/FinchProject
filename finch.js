load("readline.js");
load("Finch.js");


// Gain access to our finch
var finch = new Finch();

;

while (true){
	var obs = finch.getObstacleSensors();
	print("obs: " + obs.left + "," + obs.right);
	Thread.sleep(250);
if((obs.left = false) && (obs.right = false)){
	finch.setWheelPower(-100, 100);
}

else //if((obs.left = true) || (obs.right = true)) 
{	
	finch.setWheelPower(100, 100); 
}
}

//}
