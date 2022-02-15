can = document.getElementById("myCanvas").innerHTML;
ctx = can.getContext("2d");

var hei = 20;
var wid = 25;

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

var xcoord = 10;
var ycoord = 15; 

function load() {
    bgtag = new Image();
    bgtag.onload = uploadbg;
    bgtag.src = background_image;

    crtag = new Image();
    crtag.onload = uploadcr;
    crtag.src = greencar_image;
}

function uploadbg() {
    ctx.drawImage(bgtag, 0, 0, can.width, can.height);
}

function uploadcr() {
    ctx.drawImage(crtag, xcoord, ycoord, wid, hei);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(ycoord >= 10) {
        ycoord = ycoord-10;
        uploadbg(); uploadcr();
    }
}

function down()
{
	if(ycoord <= 790) {
        ycoord = ycoord+10;
        uploadbg(); uploadcr();
    }
}

function left()
{
	if(xcoord >= 10) {
        xcoord = xcoord-10;
        uploadbg(); uploadcr();
    }
}

function right()
{
	if(xcoord <= 990) {
        xcoord = xcoord+10;
        uploadbg(); uploadcr();
    }
}