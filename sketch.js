
var trex ,trex_running ,ground ,groundImage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png")
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,175,7,10)
 trex.addAnimation("running",trex_running)
 trex.scale = .5
 ground = createSprite(300,190,1,1)
 ground.addImage(groundImage)
}

function draw(){
  background("white")
  if (keyDown("space")){
    trex.velocityY =-10
  }
  trex.velocityY +=0.5
  ground.velocityX=-5
  if (ground.x<-200){
    ground.x = 985
  }
  trex.collide(ground)
  drawSprites()

}
