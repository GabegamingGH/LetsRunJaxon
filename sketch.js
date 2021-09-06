var path
var Jaxon
var edges

function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  JaxonImg = loadAnimation("Runner-1.png","Runner-2.png")
  }

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
  Jaxon = createSprite(200,350,10,10)
  Jaxon.addAnimation("running",JaxonImg)
  Jaxon.scale = 0.1
}
function draw(){
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  Jaxon.x = mouseX
  edges = createEdgeSprites()
  Jaxon.collide(edges[0])
  Jaxon.collide(edges[1])
  drawSprites();
}
