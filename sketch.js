var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost=createSprite(300,300);
  ghost.addImage(ghostImg);
  ghost.scale=0.4

}

function draw() {
  background(200);

  if(keyDown("space")){
    ghost.velocityY=-6 ;
  }
  ghost.velocityY+=0.8;

  if(keyDown(LEFT_ARROW)){
    ghost.x-=3;
  }
  if(keyDown(RIGHT_ARROW)){
    ghost.x+=3;
  }
 if(tower.y > 400){
      tower.y = 300
    }
    spawnDoors()
    drawSprites();
}

function spawnDoors(){
  if(frameCount%150===0){
    door=createSprite(100,-50);
    door.addImage(doorImg);
    door.x=Math.round(random(120,450));
    door.lifetime=800;
    door.velocityY=1;
  }
}
