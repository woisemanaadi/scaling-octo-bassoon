class Ball{
    constructor(x,y,radius){
       var options = {
            isStatic:false,
            resitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.image=loadImage("paper.png")
        this.body= Bodies.circle(x,y,radius,options);
        this.radius=radius;
       
        World.add(world,this.body);
    }

    display(){
        push()
        imageMode(CENTER);

        fill("yellow");

        image(this.image,this.body.position.x, this.body.position.y,this.radius+50,this.radius+50);
        pop()
    }
}