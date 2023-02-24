
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;


var ball, ball1,ball2,ball3;




var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  ground =new Ground(200,390,400,20);



  ball = Bodies.circle(100,20,15,ball_options);
  World.add(world,ball);

  ball1 = Bodies.circle(200,20,15,ball_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(200,20,15,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(200,20,15,ball_options);
  World.add(world,ball3);



  con= Matter.Constraint.create ({ 
    pointA:{x:100,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  }) 
  World.add(world,con)

  con1= Matter.Constraint.create ({ 
    pointA:{x:125,y:20},
    bodyB:ball1,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  }) 
  World.add(world,con1)

  con2= Matter.Constraint.create ({ 
    pointA:{x:150,y:20},
    bodyB:ball2,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  }) 
  World.add(world,con2)




  con3= Matter.Constraint.create ({ 
    pointA:{x:175,y:20},
    bodyB:ball3,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  }) 
  World.add(world,con3)





  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  strokeWeight(9)
  stroke(150)
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)


  ellipse(ball1.position.x,ball1.position.y,20);
  strokeWeight(9)
  stroke(150)
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y)



  ellipse(ball2.position.x,ball2.position.y,20);
  strokeWeight(9)
  stroke(150)
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y)


  ellipse(ball3.position.x,ball3.position.y,20);
  strokeWeight(9)
  stroke(150)
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y)





  ground.show();
  
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.015,y:-0});
}
  

