
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImage=loadImage("plucking mangoes/boy.png")
	treeImage=loadImage("plucking mangoes/tree.png")
	stoneImage=loadImage("plucking.mangoes/stone.png")
}

function setup() {
	createCanvas(800, 700);

boy=createSprite(300,100,20,50)
boy.addImage(boyImage);
tree=createSprte(500,200,100,71);
tree.addImage(treeImage);
stone=createSprite(290,210,20,20);
stone.addImage(stoneImage)
	engine = Engine.create();

	world = engine.world;

	//Create the Bodies Here.
boy=Bodies.rectangle(200,600,10,10);
World.add(world,boy);
tree=Bodies.rectangle(400,300,75,100);
World.add(world,tree);
stone=Bodies.rectangle(210,30,10,10);
world.add(world,stone)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
boy.display();
tree.display();
stone.display();
  drawSprites();
 
}



