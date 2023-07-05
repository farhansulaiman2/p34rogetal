
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var missle1,missle2,missle3,zombie1img,zombie2img
var zombie = [],missle1img,missle2img,missle3img
var creture,cretureimg,ground,zombieAnamation
var blowup
var misile = [];
var score = 0
var tower,towerimg

function preload() {
  
 bg = loadImage("./img foldeer/3812.jpg")
 blowup =loadImage("./img foldeer/boom.png")
 towerimg = loadImage("./img foldeer/towerpng.w.png")
 cretureimg = loadImage("./img foldeer/moster.png")
backgroundM = loadSound('./img foldeer/motivational-epic-music-inspiring-cinematic-background-music-124265.mp3')
zombie1img = loadImage("./img foldeer/zombie3.png")
zombie2img = loadImage('./img foldeer/zombie4.png')
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle =15

  var ismobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (ismobile){
 canW=displayWidth
 canH=displayHeight
 createCanvas(displayWidth+80,displayHeight);
  }
 else{

 canH=windowHeight
 canW=windowWidth
 createCanvas(windowWidth,windowHeight);
}



ground =Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
World.add(world,ground)

tower = Bodies.rectangle(90, 350, 160, 310, { isStatic: true })
World.add(world,tower)

cannon = new cannon(180, 110, 100, 50, angle);

 
  


}

function draw() 
{
  background(bg);
  Engine.update(engine);
  
  
  if(!backgroundM.isPlaying()){
  
    backgroundM.play()
    backgroundM.setVolume(0.2)

  }


  
  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();

  push();
  translate(tower.position.x, tower.position.y);
  rotate(tower.angle);
  imageMode(CENTER);
  image(towerimg, 0, 0, 160, 310);
  pop();
showzombie()

}

function showzombie() {
  if (zombie.length > 0) {
    if (
     zombie.length < 4 &&
      zombie[zombie.length - 1].body.position.x < width - 300
    ) {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var zombie = new zombie(
        width,
        height - 100,
        170,
        170,
        position,
        zombieAnimation
      )

      zombie.push(zombie);
    }

    for (var i = 0; i < zombie.length; i++) {
      Matter.Body.setVelocity(zombie[i].body, {
        x: -0.9,
        y: 0
      });
    }

     zombie[i].display();
      zombie[i].animate();
      var collision = Matter.SAT.collides(this.tower, zombie[i].body);
      if (collision.collided && !zombie[i].isBroken) {
        isGameOver = true;
        gameOver();

     

      }
    }
  }