class missle{

constructor(x,y,w,h){

var options={
isStatic : true
};


this.body = Bodies.rectangle(x,y,w,h,options)
this.speed = 0.05
this.image = loadimage("./img foldeer/missle1.png")
this.anamation = [this.image]
this,trajectory = []
this.isSink = false
World.add(world,this.body)

}

anamate(){
    this.speed += 0.05
}


remove(index){

this.isSink =true
Matter.body.setvelocity(this.body, {x:0,y:0})

this.anamation = blowup
this.speed = 0.05
setTimeout(() => {
Matter.World.remove(world,this,body)
delete projectile[index]

},1000)

}
shoot() {
    var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }


  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, 0, this.width, this.height);
    pop();

    if (this.body.velocity.x > 0 && pos.x > 10 && !this.isSink) {
      var position = [pos.x, pos.y];
      this.trajectory.push(position);
    }

    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
  }







}