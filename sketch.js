var car1,car2,car3,car4,wall1,wall2,wall3,wal4,line1,line2,lin3;
function setup() {
  createCanvas(800,400);
  car1 =  createSprite(75, 50, 50, 50);
  car2 =  createSprite(75, 150, 50, 50);
  car3 =  createSprite(75, 250, 50, 50);
  car4 =  createSprite(75, 350, 50, 50);
  line1 = createSprite(200, 100, 1500, 10);
  line2 = createSprite(200, 200, 1500, 10);
  line3 = createSprite(200, 300, 1500, 10);
  wall1 = createSprite(750, 50, 50, 80); 
  wall2 = createSprite(750, 150, 50, 80); 
  wall3 = createSprite(750, 250, 50, 80); 
  wall4 = createSprite(750, 350, 50, 80); 
  car1.shapeColor = "black";
  car2.shapeColor = "black";
  car3.shapeColor = "black";
  car4.shapeColor = "black";
  


}

function draw() {
  background(150,250,200);  
  
  if("leftclick"){
   car1.velocityX = 40;
   car2.velocityX = 50;
   car3.velocityX = 30;
   car4.velocityX = 43;
  }
  if(car1.isTouching(wall1)){
   car1.velocityX = 0;
   
  }
  if(car2.isTouching(wall2)){
    car2.velocityX = 0;
    
   }
   if(car3.isTouching(wall3)){
    car3.velocityX = 0;
    
   }
  
   if(car4.isTouching(wall4)){
    car4.velocityX = 0;
    
   }

  if(car1.isTouching(wall1)){
    car1.shapeColor = "green";
    }
  if(car2.isTouching(wall2)){
      car2.shapeColor = "red";
    }
  if(car3.isTouching(wall3)){
      car3.shapeColor = "yellow";
    }
  if(car4.isTouching(wall4)){
      car4.shapeColor = "blue";
    }
  drawSprites();
  }
