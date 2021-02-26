var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, side1, side2, side3, side1s, side2s, side3s
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 side1 = Bodies.rectangle(width/2-110, 610, 20, 100, {isStatic:true})
	 World.add(world, side1)

	 side1s = createSprite(width/2-110, 610, 20, 100)
	 side1s.shapeColor = "red";


	 side2 = Bodies.rectangle(width/2, 650, 200, 50, {isStatic:true})
	 World.add(world, side2)

	 side2s = createSprite(width/2, 650, 200, 20)
	 side2s.shapeColor = "red";


	 side3 = Bodies.rectangle(width/2+110, 610, 20, 100, {isStatic:true})
	 World.add(world, side3)

	 side3s = createSprite(width/2+110, 610, 20, 100)
	 side3s.shapeColor = "red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  side1.x = side1s.x;
  side2.x = side2s.x;
  side3.x = side3s.x;
  drawSprites();
  keyPressed()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    
  }
}



