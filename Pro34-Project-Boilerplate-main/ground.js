class Ground
{

constructor(x,y,w,h){

let option = {

isStatic:true

}
this.body=Bodies.rectangle(x,y,w,h)
this.w = w
this.h = h
World.add(world,this.body)
}



show(){
let pos = this.body.position

push()
rectMode(CENTER)
stroke(255)
Fill(127)
rect(pos.x,pos.y,this.w,this.h)
}




}