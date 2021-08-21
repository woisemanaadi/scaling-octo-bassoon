class Trash {
    constructor(x,y,height,width){
        var options ={

            isStatic:true,
            resitution:0,
            friction :1,
            denstiy :0.1


        }
        this.image=loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;


        World.add(world,this.body);
    }
    

    display(){
        rectMode(CENTER)

        fill(255);

        rect(this.body.position.x, this.body.position.y, this.width,this.height)
        image(this.image,500,450,150,150)

        // push();
        // translate(posLeft.x, posLeft.y);
        // rectMode(CENTER);
        // //strokeweight(4);
        // angleMode(RADIANS);
        // fill(255);
        // rotate(this.angle);
        // //rect(0,0,this.wallThickness,this.dustbinHeight);
        // pop();

        // push();
        // translate(posRight.x,posRight.y);
        // rectMode(CENTER);
        // //strokeweight(4);
        // angleMode(RADIANS);
        // fill(255);
        // rotate(-1*this.angle);
        // //rect(0,0,this.wallThickness,this.dustbinHeight);
        // pop();
        

    }
}