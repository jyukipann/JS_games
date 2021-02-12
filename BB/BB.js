var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
var width = document.body.clientWidth;
var height = window.innerHeight;
resetCanvas();

function resetCanvas(){
	canvas.width = width;
	canvas.height = height;
	canvas.style.backgroundColor = "rgb(200,200,200)";
	canvas.style.top = "0";
	canvas.style.left = "0";
	canvas.style.position = "absolute";
}

async function start(){
	console.log("start");
	requestAnimationFrame(update);
}

async function update(){
	//console.log("update");
	requestAnimationFrame(update);
}



window.addEventListener("load", start, false);