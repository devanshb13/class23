const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2
var ground
var round
function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2=new Box(240,100,50,100)
    ground=new Ground(200,380,1000,20)
    round=new Circle1(350,150,25)
}

function draw(){
    background("green");
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display()
   round.display()
}