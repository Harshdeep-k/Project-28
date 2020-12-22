class Mango
{
    constructor(x,y)
    {
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,50,options);
        World.add(world,this.body);
        this.image=loadImage("images/mango.png");
        this.radius=50;
    }
    display()
    {
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}