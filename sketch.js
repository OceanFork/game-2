var player;
var energyLevel = 0;
var boundary,boundary1,boundary2;
var apple, banana, coconut,soda,chips;
var applesGroup, appleImg;
var bananasGroup, bananaImg;
var coconutsGroup, coconutImg;
var sodaGroup, sodaImg;
var chipsGroup, chipsImg;
var playerImg1,playerImg2,playerImg3;
var cart, cartImg;

function preload() {
    appleImg = loadImage("apple.png");
    bananaImg = loadImage("banana.png");
    coconutImg = loadImage("coconut.png");
    sodaImg = loadImage("soda.png");
    chipsImg = loadImage("chips.png");
    playerImg1 = loadImage("boy.png");
    playerImg2 = loadImage("girlPlayer.jpg");
    playerImg3 = loadImage("robot.jpg");
    cartImg = loadImage("cart.png");
}
function setup(){
    createCanvas(500,4000);
    player = createSprite(200,3900,10,20);
    player.addImage(playerImg1);
    if (keyDown("a")){
        player.addImage(playerImg1);
    } if (keyDown("b")){
        player.addImage(playerImg2);
    } if (keyDown("c")){
        player.addImage(playerImg3);
    }
    boundary = createSprite(5,2000,10,4000);
    boundary1 = createSprite(495,2000,10,4000);
    boundary2 = createSprite(250,5,500,10);
   cart = createSprite(random(50,450),random(2000, 3800),50,50);
  cart.addImage(cartImg);
  cart.scale = 0.2;
    applesGroup = new Group();
    bananasGroup = new Group();
    coconutsGroup = new Group();
    sodaGroup = new Group();
    chipsGroup = new Group();
    boundaryGroup = new Group();
    

    for(var i =  0; i < 20; i++){
        apple = createSprite(random(50,450),random(100,3900),10,10);
        apple.addImage(appleImg);
        applesGroup.add(apple); 
    }
    for(var i =  0; i < 10; i++){
       banana = createSprite(random(50,450),random(100,3900),10,30);
       banana.addImage(bananaImg);
       banana.scale = 0.2;
       bananasGroup.add(banana); 
    }
    for(var i =  0; i < 7; i++){
        coconut = createSprite(random(50,450),random(100,3900),30,30);
        coconut.addImage(coconutImg);
        coconut.scale = 0.2;
        coconutsGroup.add(coconut); 
    }
    for(var i =  0; i < 10; i++){
        soda = createSprite(random(50,450),random(100,3900),30,50);
        soda.addImage(sodaImg);
        soda.scale = 0.2;
        sodaGroup.add(soda); 
    }
    for(var i =  0; i < 5; i++){
        chips = createSprite(random(50,450),random(100,3900),30,50);
        chips.addImage(chipsImg);
        chips.scale = 0.2;
        chipsGroup.add(chips); 
    }
    //setup ends
    }
    
function draw(){
    background(0,0,0);
    player.velocityY = -8;
    if(keyWentDown(LEFT_ARROW)){
        player.velocityX = -8;
    }
    if(keyWentUp(LEFT_ARROW)){
        player.velocityX = 0;
    }
    if(keyWentDown(RIGHT_ARROW)){
        player.velocityX = 8;
    }
    if(keyWentUp(RIGHT_ARROW)){
        player.velocityX = 0;
    }
   
    this.camera.y = player.y;
    player.collide(boundary);
    player.collide(boundary1);
    player.collide(boundary2);
    //console.log(player.y);
    textSize(30);
    if(player.y < 21){
        text("FINISH",200,50)
        player.velocityY = 0;
    }


    for (var i = 0; i < applesGroup.length; i++) 
     { 
        if (applesGroup.get(i).isTouching(player)||applesGroup.get(i).isTouching(cart)) {
            applesGroup.get(i).destroy(); 
            energyLevel = energyLevel+1;
        } 
       
    }
    for (var i = 0; i < bananasGroup.length; i++) 
     { 
        if (bananasGroup.get(i).isTouching(player)||bananasGroup.get(i).isTouching(cart)) {
            bananasGroup.get(i).destroy(); 
            energyLevel = energyLevel+3;
        }
         i
        
    }
    for (var i = 0; i < coconutsGroup.length; i++) 
     { 
        if (coconutsGroup.get(i).isTouching(player)|| coconutsGroup.get(i).isTouching(cart)) {
            coconutsGroup.get(i).destroy(); 
            energyLevel = energyLevel+10;
        }
         
    }
    for (var i = 0; i < sodaGroup.length; i++) 
    { 
       if (sodaGroup.get(i).isTouching(player) || sodaGroup.get(i).isTouching(cart) ) {
          sodaGroup.get(i).destroy(); 
           energyLevel = energyLevel-5;
       } 
    
   }
   for (var i = 0; i < chipsGroup.length; i++) 
   { 
      if (chipsGroup.get(i).isTouching(player) || chipsGroup.get(i).isTouching(cart)) {
         chipsGroup.get(i).destroy(); 
          energyLevel = energyLevel -15;
      } 
  }
   camera.y =  player.y;
 cart.collide(boundary);
 cart.collide(boundary1);
 cart.collide(boundary2);

 if(cart.isTouching(player)){
    cart.velocityY = -5;
 } 
    drawSprites();
    this.camera.positionY = player.y;
    fill("blue");
    text("Energy Level: " + energyLevel, player.x, player.y + 100);
    
}

