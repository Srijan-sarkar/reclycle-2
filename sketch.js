
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3,bin3s,waste,ground;

var paperimg,binimg;

function preload()
{
	paperimg = loadImage("paper.png");
	binimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new recycle (1150,300,10,100);
	bin2 = new recycle(1050,300,10,100);
	bin3s = createSprite(1100,310,200,10);
	bin3s.addImage(binimg);
	bin3s.scale = 0.5;
	bin3 = Bodies.rectangle(1200,300,10,100,{isStatic : true});

	ground = new Ground(700,400,1400,20);

	waste =  new Waste(400,300,30);
	
	World.add(world,waste);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bin1.display();
  bin2.display();
  ground.display();
  waste.display();
  
  drawSprites();
 
}

function keyPressed (){

	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(waste.body,waste.body.position,{x:170,y:-150});
	}
}