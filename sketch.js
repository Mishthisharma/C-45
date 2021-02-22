var button1 , button2 , button3 , rect1 , bgImg
var fade;
var fadeAmount = 1
function preload()
{
   button1 = createImg("Images/Button.png")
   button2 = createImg("Images/Button.png")
   button3 = createImg("Images/Button.png")
   bgImg = loadImage("Images/Green India Background.jpg")

}
function setup()
{
	createCanvas (1200 , 1200)
    rect1 = createSprite(10 , 10 , 20 , 20)
	button1.position( 20 , 900).mousePressed(gotogame)
	button1.size(400 , 300)
	button2.position( 0 , 900).mousePressed(gotogame)
	button2.size(400 , 300)
	button3.position( 0 , 900).mousePressed(gotogame)
    button3.size(400 , 300)
	textSize(100)
    fade = 0

	
}
function draw()
{
	background(bgImg)
	rect1.x = World.mouseX ;
	rect1.y = World.mouseY ;
    console.log(rect1.x , rect1.y)
	fill(0 , 0 , 255, fade)
    text("MISSION CLEAN INDIA", 100,100)
    if (fade<0) fadeAmount=1; 
 
    if (fade>255) fadeAmount=-10; 
 
    fade += fadeAmount; 
    print(fade)
	drawSprites();
}
function gotogame()
{
	console.log("DONE")
}