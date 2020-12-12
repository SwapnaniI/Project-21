var bullet,wall;
var speed,weight;
var thick, damage;


function setup() {

  createCanvas(1600,400);  

  bullet = createSprite(400, 200, 50, 25);
  wall = createSprite(1200, 200, thick ,200);

  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thick=random(22,83);

  damage=(0.5*weight*speed*speed)/(thick*thick*thick);
  bullet.velocityX=speed;
}

function draw() {

 bullet.depth=wall.depth+1;
 
    background("blue");

   bullet.shapeColor = "white";
    wall.shapeColor = "white";

   console.log(bullet.x);

     if((isTouching(bullet,wall))||(bullet.x>1190)){
      bullet.velocityX=0;
      bullet.x=(wall.x-(bullet.width/2+wall.width/2))+0.1;
          if(damage>10){
            wall.shapeColor="red";
          }
          else{
            wall.shapeColor="green";
          }
     }

    
  textSize(16)
  text("Speed: " + speed, 150, 50);

  drawSprites();

  
}