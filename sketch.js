
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImage;
var tree,treeImage;
var stoneObj;
var ground,groundSprite;
var sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload()
{
	boyImage = loadImage("boy.png");
//	treeImage = loadImage("tree.png")
}

function setup() {
	createCanvas(1400, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.  


	stoneObj = new stone(500,500,50,50);
	sling = new Slingshot(stoneObj.body,{x:80,y:500});
	mango1 = new Mango(700,300,50,50);
	mango2 = new Mango(800,200,50,50);
	mango3 = new Mango(900,200,50,50);
	mango4 = new Mango(900,300,50,50);
	mango5 = new Mango(960,250,50,50);
	mango6 = new Mango(900,120,50,50);
	mango7 = new Mango(1000,200,50,50);
	mango8 = new Mango(800,300,50,50);
	tree = new Ground(650,400,20,20);





	boy = createSprite(150,570,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.14;

	  groundSprite=createSprite(width/2, 650, width,10);
      groundSprite.shapeColor=color("brown")


	 ground = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
	 ground.shapeColor = ("black")

	World.add(world, ground);








	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  //keyPressed();

  mango1.depth = tree.depth;
  tree.depth = tree.depth+1;



  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);






  tree.display();
  mango8.display();
  mango7.display();
  mango6.display();
  mango5.display();
  mango4.display();
  mango3.display();
  mango2.display(); 
  mango1.display();
  stoneObj.display();
  sling.display();


  drawSprites();
 
}

function mouseDragged()
  {
	  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
  }

function mouseReleased ()
 {
	 sling.fly();
 }

 function keyPressed(){
  if(keyCode === 32){
      sling.attach(stoneObj.body);
  }
}

  function detectollision(lstone,lmango)
   {
      mangoBodyPosition = lmango.body.position;
	   stoneBodyPosition = lstone.body.position;
	   
	   var distance = dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y)

	   if(distance<=lmango.r+lstone.r) 
        {
            Matter.Body.setStatic(lmango.body,false);            
		}
   }


