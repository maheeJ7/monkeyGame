var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup

var survivalTime;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(200,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  bananaGroup = new Group();
  survivalTime=0;
}


function draw() {
  background("white");
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/framerate())
  text("Survival Time: "+ survivalTime,100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY=monkey.velocityY-0.8;
  
  monkey.collide(ground);

  drawSprite();
}

function spawnBanana(){
  if(frameCount%80===0){
    banana = createSprite(400,Math.round(random(120,200)),10,10);
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.lifetime(100);
    bananaGroup.add(banana);   
  }
}  

function spawnObstacle(){
  if(frameCount%300===0){
    obstacle = createSprite(400,315,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.collide(ground);
  }
  }



