
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var engine, world;
var bg, boy,tree;
var stone,mango1,monago2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var sling;
function preload()
{
	bg=loadImage("images/bg.jpg");
	boy=loadImage("images/boy.png");
	tree=loadImage("images/tree.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	stone=new Stone(200,200);
	//tree=new Tree(800,320,360,400);
	ground=new Ground(width/2,height-10,width,20);
	
	mango1=new Mango(800,300);
	mango2=new Mango(750,280);
	mango3=new Mango(720,300);
	mango4=new Mango(850,220);
	mango5=new Mango(780,200);
	mango6=new Mango(900,260);
	mango7=new Mango(700,230);
	mango8=new Mango(830,180);
	mango9=new Mango(860,250);

	sling=new Slingshot(stone.body,{x:265,y:400});

	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: width,
		  height: height/8,
		  wireframes: false
		}
	  });*/
	Engine.run(engine);
	//Render.run(render)
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  image(boy,250,350,100,180);
  //tree.display();
  stone.display();
  imageMode(CENTER);
  fill("brown");
  image(tree,800,320,360,400);
  textSize(30);
  stroke("white");
  strokeWeight(2);
  fill("black");
  text("Press space to hit the mangoes again",200,100);
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();  
 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
 detectcollision(stone,mango6);
 detectcollision(stone,mango7);
 detectcollision(stone,mango8);
 detectcollision(stone,mango9);
console.log(mango1);
 
  
 
}

function mouseDragged()
{
 Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
sling.fly();
}

function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.setPosition(stone.body,{x:265,y:400});
		sling.attach(stone.body);
	}
}

function detectcollision(istone,imango)
{
  mp=imango.body.position;
  sp=istone.body.position;
  
  var d=dist(sp.x, sp.y, mp.x, mp.y);
//console.log(imango.r+istone.r)
  	if(d <= imango.radius + istone.radius)
    {
  	  Body.setStatic(imango.body,false);
    }
 }

