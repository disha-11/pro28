class tree{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("tree.png");
        World.add(world,this.body);
   
       
    }
    display(){
        
        imageMode (CENTER);
        image (this.image,this.body.position.x,this.body.position.y,700,700);
    }
}