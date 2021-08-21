
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	const Engine  = Matter.engine 
	const Bodies = Matter.Bodies
	const Body = Matter.Body

	//var Engine;
	var world ;

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(100,550,10);
	ground = new Ground(400,600,800,20);
	leftside = new Trash(520,540,100,10);
	rightside = new Trash(630,540,100,10);
	bottom = new Trash(580,580,20,110);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);
  ball.display();
  ground.display();
  leftside.display();
  bottom.display();
  rightside.display();

  
  drawSprites();
 
}

function keyPressed(){
	console.log("function called")
	if(keyCode===38){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:12, y:-15})
	
	}
}



