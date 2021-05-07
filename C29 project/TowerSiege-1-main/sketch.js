const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12,
block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var platform;
var slingShot, ball; 
var ballImg;

function preload(){
    ballImg = loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200, 400);

    //initialize the engine 
    engine = Engine.create(); 
    world = engine.world;  

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(390, 300, 250, 20);
    

    //level one
    block1 = new Block(300,275,30,40);

    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    //level 2
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);

    //level 3
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);

    //top
    block16 = new Block(390, 155, 30, 40);

    //ball object 
    ball = Bodies.circle(50, 200, 20); 
    World.add(world, ball)
    slingShot = new Slingshot(this.ball,{x:100, y:200} )
}

function draw() {

    background("black")

    Engine.update(engine);
    ground.display();

    platform.display(); 

    //pyramid 1
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    
    //pyramid 2
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    slingShot.display();

    imageMode(CENTER); 
    image(ballImg, ball.position.x, ball.position.y, 40, 40)
}

function mouseDragged() {
    Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingShot.fly(); 

}