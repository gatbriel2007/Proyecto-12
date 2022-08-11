var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path = createSprite(200,50,50,50);
 path.addImage("path",pathImg);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;

boy = createSprite(200,350,10,10);
boy.addAnimation("boyImg", boyImg);
boy.scale=0.7;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)

  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
