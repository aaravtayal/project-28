class Mango{
    constructor(x, y,width,height) {
        var options = {
             isStatic:true,
           // restitution:0.9,
            friction:1.0,
            density:1.0
        }
       // this.radius = radius;
        this.body = Matter.Bodies.rectangle(x, y,width,height, options);
        this.image = loadImage("mango.png")
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display()
      {

      //  Engine.update(engine);
        push();
      //   ellipseMode(RADIUS)
         fill("magenta")
         translate(this.body.position.x,this.body.position.y)
        // ellipse(this.body.position.x,this.body.position.y,this.radius,);
        rotate(this.body.angle);
        this.image.scale = 0.2;
         image(this.image,0,0,this.width,this.height);
        pop();
        }
}






