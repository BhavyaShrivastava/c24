class ground{
    constructor(x,y,width,height){

   var Ground_opition = {
       isStatic : true
   }
           
   this.body = Bodies.rectangle(x,y,width,height,Ground_opition);
   this.width = width;
   this.height = height;

   World.add(world,this.body);
    }

     show(){
     var bode = this.body.position
     fill("blue");
     rectMode(CENTER)
     rect(bode.x,bode.y,this.width,this.height)
     }
        
    }
