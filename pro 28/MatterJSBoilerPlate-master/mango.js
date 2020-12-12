class mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.image=loadImage("mango.png");
        
        World.add(world,this.body);
        
    }
    display(){
        
        imageMode (CENTER);
        image (this.image,this.body.position.x,this.body.position.y,70,70);
    }
}