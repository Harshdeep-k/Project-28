class Stone
{
    constructor(x,y)
    {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1
        }
        this.body=Bodies.rectangle(x,y,30,30,options);
        World.add(world,this.body);
        this.image=loadImage("images/stone.png");
        this.radius=30;
    }
    display()
    {
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,30,30);
        pop();
    }
}