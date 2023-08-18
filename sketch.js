var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieGroup, zombieImg
var bullet, bulletImg, bulletGroup

var bullets = 60




function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieImg = loadImage("assets/zombie.png")
  bulletImg = loadImage("assets/bullet.png")


}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


  zombieGroup = new Group()
  bulletGroup = new Group()


}

function draw() {
  background(0); 
  spawnZombie()




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  bullet = createSprite(displayWidth - 1150, player.y-30, 20, 10)
  bullet.addImage(bulletImg)
  bullet.velocityX = 20
  bulletGroup.add(bullet)
  bullet.scale = 0.10
  bullet.depth = player.depth
  player.depth +=1
  
  
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)

}



drawSprites();

}

function spawnZombie(){
  if(frameCount %60 === 0){
    zombie = createSprite(random(1000, 1500), random(100, 500), 40, 40)
    zombie.addImage(zombieImg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    zombieGroup.add(zombie)
    zombie.lifetime = 500

  }
}


