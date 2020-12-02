code.md



var player;
var energyLevel = 0;
var boundary,boundary1,boundary2;
var apple, apple1, apple2, apple3, apple4, apple5, apple6;
var applesGroup, appleImg;
//var playerImg;
function preload() {
 appleImg = loadImage("apple.png")
}
function setup(){
    createCanvas(500,4000);
    player = createSprite(200,3900,10,20);
    boundary = createSprite(5,2000,10,4000);
    boundary1 = createSprite(495,2000,10,4000);
    boundary2 = createSprite(250,5,500,10);
    
    
    // apple1 = createSprite(random(50,450),random(100,3900),10,10);
    ///apple1.shapeColor = color(255,0,0);
   /* apple2 = createSprite(random(50,450),random(100,3900),10,10);
    apple2.addImage(appleImg);
    apple3 = createSprite(random(50,450),random(100,3900),10,10);
    apple3.addImage(appleImg);
    apple4 = createSprite(random(50,450),random(100,3900),10,10);
    apple4.addImage(appleImg);
    apple5 = createSprite(random(50,450),random(100,3900),10,10);
    apple5.addImage(appleImg);
    apple6 = createSprite(random(50,450),random(100,3900),10,10);
    apple6.addImage(appleImg); */
  //  applesGroup = createGroup();
      for(var i = 0; i < 10; i++){
        apple = createSprite(random(50,450),random(100,3900),10,10);
        apple.addImage(appleImg);
        if(apple.isTouching(player)){
            energyLevel = energyLevel + 1;
              apple.destroy()
              console.log(energyLevel);
        }
    }

        for (var i = 0; i < fruitGroup.length; i++) 
        { if (fruitGroup.get(i).isTouching(players)) { 
            fruitGroup.get(i).destroy();
             player.score =player.score+1; 
             player.update();
             } 
            }
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
    }if(keyWentUp(RIGHT_ARROW)){
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
    //apples();
    
    //if(apple1.isTouching(player)){
    //    energyLevel = energyLevel + 1;
    //      apple1.destroy()
   // }
    
    drawSprites();
    text("energy level " + energyLevel, player.x, player.y + 100);
}

function apples() {
    if(frameCount  % 20 === 0){
    var apple = createSprite(random(50,450),random(100,3900),10,10);
    apple.addImage(appleImg);
    var apple1 = createSprite(random(50,450),random(100,3900),10,10);
    apple1.addImage(appleImg);
  

    }
}