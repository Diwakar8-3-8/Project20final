var Zenia;
var Tourus;
var Cyclap;
var wall1,wall2,wall3;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  Zenia = createSprite(50, 120, 50, 30);
  Tourus = createSprite(50, 200, 50, 30);
  Cyclap = createSprite(50, 280, 50, 30);
  wall1 = createSprite(1500,200,60,height/2);
  wall1.shapeColor = (80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
}
1
function draw() {
  background("lightblue");  

  Zenia.velocityX = speed;
  Tourus.velocityX = speed;
  Cyclap.velocityX = speed;

  if(wall1.x-Zenia.x < (Zenia.width+wall1.width)/2)
  {
    Zenia.velocityX = 0;
    var deformation= 0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      Zenia.shapeColor = "red";
    }
    if(deformation<180 && deformation>100)
    {
      Zenia.shapeColor = "yellow";
    }
    if(deformation<100)
    {
      Zenia.shapeColor = "green";
    }
  }

  if(wall1.x-Tourus.x < (Tourus.width+wall1.width)/2)
  {
    Tourus.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      Tourus.shapeColor = "red";
    }
    if(deformation<180 && deformation>100)
    {
      Tourus.shapeColor = "yellow";
    }
    if(deformation<100)
    {
      Tourus.shapeColor = "green";
    }
  }

  if(wall1.x-Cyclap.x < (Cyclap.width+wall1.width)/2)
  {
    Cyclap.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      Cyclap.shapeColor = "red";
    }
    if(deformation<180 && deformation>100)
    {
      Cyclap.shapeColor = "yellow";
    }
    if(deformation<100)
    {
      Cyclap.shapeColor = "green";
    }
  }
  drawSprites();
}