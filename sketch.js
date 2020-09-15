var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 32);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 50, 25);
  wall = createSprite(1200, 200, thickness, 200);
}

function draw() {
  background(0,0,255); 
  bullet.shapeColor = color (255, 255, 255);
  wall.shapeColor = color (80, 80, 80); 
  bullet.velocityX = speed;
  if(hasCollided(bullet,wall)){

      bullet.velocityX = 0;
      var damage = ((0.5 * weight * speed * speed) / (thickness * thickness * thickness));

      if(Math.round(damage) > 10){
        wall.shapeColor = color(255, 0, 0);
      }

      if (Math.round(damage) < 10){
        wall.shapeColor= color(0, 255, 0);
      }
      console.log (damage);
  }
  drawSprites();
}

function hasCollided(lbullet, lwall){
  var bulletRightEdge, wallLeftEdge;
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  } else {
    return false;
  }
  
}