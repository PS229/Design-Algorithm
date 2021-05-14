var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(0,200,50,50)
  fixedRect.shapeColor = "red"
  movingRect = createSprite(800,200,80,50)
  movingRect.shapeColor = "red"

  movingRect.velocityX = -6
  fixedRect.velocityX = 6
}

function draw() {
  background("white");
  
  if (movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2) {

    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
    movingRect.velocityX = movingRect.velocityX * -1
    fixedRect.velocityX = fixedRect.velocityX * -1
  }
  else {
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }
  
  drawSprites();
}