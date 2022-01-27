
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1100,650);
	paperObj = new paper(100, 600, 70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
 Engine.update(engine);
  groundObject.display();
  dustbinObj.display();
  paperObj.display();
  drawSprites();
  keyPressed();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position, {x:130, y:-145})

	}
	
}
