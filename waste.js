class Waste{
    constructor(x,y,radius){

        var options = {

            isStatic  : false,
            restitution : 0.3,
            friction : 0.5,
            density :1.2

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = radius*2;
        this.height = radius*2;
        this.image = loadImage("paper.png");

        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.height);

        this.image.scale = 0.2;

        pop();
    }
}