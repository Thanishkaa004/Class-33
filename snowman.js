class Snowman{
    constructor(x,y) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic: true
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 100;
        this.height = 100;
        World.add(world, this.body);
        this.visibility = 255;
        this.image = loadImage("snowman.png");
        
      }
      display(){
        /*var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);*/
        //imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 100, 100);
        //pop();
      }
}
