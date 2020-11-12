const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles=[];
  var plinkos=[];
  var divisions=[];
  var divisionsHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,800,480,10);
  
  //creating Divisions
  for (var k=0; k <=width; k=k+80) {
    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight));
  }

  for (var k=80; k <=width; k=k+80) {
    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight));
  }

  for (var k=160; k <=width; k=k+80) {
    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight));
  }

  for (var k=240; k <=width; k=k+80) {
    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight));
  }


  //creating Plinkos
for (var j=40; j<=width;j=j+50){
plinkos.push(new Plinko(j,75,10));
}

for (var j=15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175,10));
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,275,10));
    }

    for (var j=20; j<=width-10; j=j+50){
      plinkos.push(new Plinko(j,375,10));
      }

}

function draw() {
  background("black");
  Engine.update(engine);

  textSize(50);
  fill("white");
  text("Plinko Game",130,45);
  
  ground.display();

  for (var k=0; k<divisions.length; k++) {
    divisions[k].display();
  }

  for (var j=0; j< plinkos.length; j++){
    plinkos[j].display();
  }

 if (frameCount%60===0) {
   particles.push(new Particle(random(width/2-30,width/2+30),10,10));
 }

 for (var i=0; i<particles.length; i++) {
particles[i].display();
 }
 
  drawSprites();
}