

var car,wall;
var speed,weight

function setup() {
  createCanvas;
  createCanvas(1600,400);

  speed = random(55,70);

  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = "white"
  car.velocityX = speed;

  wall = createSprite(1500,200,40,height/2);

}

function draw() {
  background(0); 

  

   if(wall.x - car.x < (car.width + wall.width)/2) {
      car.velocityX = 0 ;
    var deformation = 0.5  * weight * speed * speed / 22500 ;
    if (deformation > 180) {

      car.shapeColor = rgb(255,0,0);

      stroke("white")
     textSize(24);
     fill("white")
     text("Lethal for passengers",width/2,height/2);

    }

    if (deformation < 180 && deformation > 100) {

      car.shapeColor = rgb(230,230,0);

      stroke("white")
     textSize(24);
     fill("white")
     text("Average for passengers",width/2,height/2);

    }

    if (deformation < 100)
    {

     car.shapeColor = rgb(0,255,0);

     stroke("white")
     textSize(24);
     fill("white")
     text("Good for passengers",width/2,height/2);

    }
   
   }
   
   

  drawSprites();
}