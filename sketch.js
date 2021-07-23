var helicopterImg, bgImg;
var helicopterSprite, packageSprite;
var packageBody,boxBottomBody, boxLeftBody, boxRightBody,wall1,wall2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



function preload()
{
	helicopterImg=loadImage("helicopter.png")
	bgImg=loadImage("bg.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 50,200,200);
	packageSprite.shapeColor = "yellow"
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterImg)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;
	
	boxBottomBody = new Box(400, 610, 100,20);
 	boxLeftBody = new Box(340, 570, 20,100);
 	boxRightBody = new Box(460, 570, 20,100);

	packageBody = Bodies.circle(helicopterSprite.position.x , 100 , 20 , {isStatic:true});
	World.add(world, packageBody);
	wall1=createSprite(100,350,20,700)
	wall2=createSprite(700,350,20,700)
	wall1.visible=false
	wall2.visible=false

}


function draw() {
	Engine.update(engine);
	background(bgImg);
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
helicopterSprite.bounceOff(wall1)
helicopterSprite.bounceOff(wall2)
	boxRightBody.display();
	boxLeftBody.display();
	boxBottomBody.display();

	drawSprites(); 
}

function keyPressed() {
	
	if (keyCode === LEFT_ARROW) {

helicopterSprite.velocityX=-5


	  } else if (keyCode === RIGHT_ARROW) {

		helicopterSprite.velocityX=5
	  }
	  
	if (keyCode === DOWN_ARROW) {
	   //make the static property of packageBody as false
	 

Matter.Body.setStatic(packageBody,false)


	}
}
  
