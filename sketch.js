var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.debug = true;
  fixedRect.shapeColor = 'green';

  movingRect = createSprite(200, 50, 40, 60);
  movingRect.debug = true;
  movingRect.shapeColor = 'green';
}

function draw() {
  background("lightblue");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    ){
    movingRect.shapeColor = 'red';
    fixedRect.shapeColor = 'red';
  }else{
    movingRect.shapeColor = 'green';
    fixedRect.shapeColor = 'green';
  }


  drawSprites();
}