//Global Variables

var bananaImage1;
var obstacleImage;
var obstacles_group;
var backdrop;
var score;
var player,player_running;
var ground;
var banana;
var obstacles;

function preload(){
  
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  backImage=loadImage("jungle.jpg");
  
  bananaImage1=loadImage("Banana.png");
  
  obstacleImage=loadImage("stone.png");
  
}


function setup() {
  createCanvas(600,300);
  
  backdrop=createSprite(300,-100,600,300);
  backdrop.addImage("backside",backImage);
  backdrop.visibility=true;
  backdrop.x = backdrop.width /2;
  backdrop.velocityX = -5;
  backdrop.scale=2
  
  ground=createSprite(300,270,600,10);
  ground.visible = false;
  
  player=createSprite(50,220,20,35);
  player.addAnimation("playerAnimation",player_running);
  player.visibility=true;
  player.scale=0.15;
  player.velocityY=1
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  score=0;
}


function draw(){
 background(255);
  
  player.collide(ground);
  
 if (backdrop.x < 0){
  backdrop.x = backdrop.width/2;
  }  
  
  if (keyDown("space")) {
    player.velocityY = -15;
  } 
  
    if (player.isTouching(bananaGroup)) {
      score=score+2
    bananaGroup.destroyEach();
  }
  
  if (player.isTouching(obstaclesGroup)) {
    player.scale = 0.15;
  }
  
  player.velocityY = player.velocityY + 0.8
  
  switch(score){
    case 10:player.scale=0.16;
        break;
    case 20:player.scale=0.18;
        break;
    case 30:player.scale=0.2;
        break;
    case 40:player.scale=0.22;
        break;
  }
  
  spawnBanana();
  spawnObstacles();
  
  drawSprites();
  stroke("white");
  fill("white");
  textSize(20);
  text("score: "+ score, 500,50);

}

function spawnBanana() {
  if(World.frameCount % 80 === 0) {
    var banana = createSprite(600,250,70,20);
    banana.velocityX = -6;
    banana.y = Math.round(random(100, 175));
    
    banana.addImage("banana1",bananaImage1);
    banana.scale= 0.07      
    
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
}


function spawnObstacles() {
  if(World.frameCount % 300 === 0) {
    var obstacles = createSprite(600,240,70,20);
    obstacles.velocityX = -6;
    
    obstacles.addImage("obstacle",obstacleImage);
    obstacles.scale= 0.25   
    
    obstacles.lifetime = 100;
    obstaclesGroup.add(obstacles);
  }
  
}
