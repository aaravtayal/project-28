class stone {

    constructor(x,y,width,height){
    
    var options = {
      isStatic:false,
      friction:1.0,
      density:1.0
    }
    
     this.body = Matter.Bodies.rectangle(x,y,width,height,options);
     this.image = loadImage("stone.png");
     this.width = width;
     this.height = height;
     World.add(world, this.body);
    }
    display(){
push();
   translate(this.body.position.x,this.body.position.y);
   imageMode(CENTER)
    image(this.image,0,0,this.width,this.height);
pop();

    }
    
    }