class Particle{
    constructor(x,y,r){
        var opt={
            isStatic:false
        }
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,opt);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);

    }
}