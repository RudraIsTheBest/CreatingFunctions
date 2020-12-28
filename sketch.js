var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400,100,50,40);
fixedRect.shapeColor = "blue";

  movingRect = createSprite(400, 300, 60, 90);
  movingRect.shapeColor = "blue"; 

  fixedRect.velocityY = 2;
  movingRect.velocityY = -2;
}

function draw() {
  background("green"); 
  
 // movingRect.x = mouseX;
  //movingRect.y = mouseY;

 // if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    //   fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    //   movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
     //  fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){
    
  //  movingRect.shapeColor = "gray";
   // fixedRect.shapeColor = "gray";
  //}

  //else{
   // movingRect.shapeColor = "blue";
   // fixedRect.shapeColor = "blue";

  //}

  if( movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
     fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){

      fixedRect.velocityY = fixedRect.velocityY * (-1);
     movingRect.velocityY = movingRect.velocityY * (-1);

     }
     if( movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 ){
      fixedRect.velocityX = fixedRect.velocityX * (-1);
      movingRect.velocityX = movingRect.velocityX * (-1);
    }
     

  drawSprites();
}