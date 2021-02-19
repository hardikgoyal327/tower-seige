class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.v=255
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        if(this.body.speed>3){
          World.remove(world, this.body);
        tint(255,this.v)
        rect(0,0,this.width, this.height);

        this.v=this.v-5
        
        }
        else{
          rect(0,0,this.width, this.height);

        }
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        pop();
      }
}