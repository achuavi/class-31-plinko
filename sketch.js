const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint =Matter.Constraint;

var part=[];
var plink=[];
var divis=[];

var divheight=300;

var engine, world;

var g1;
var d1,d2,d3,d4;
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10;
var score=0;

function setup() {
  



  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
 // createSprite(400, 200, 50, 50);


  g1=new Ground(width/2,height,width,20);
 //p1=new Plinko()


 for(var k=0;k<=width;k=k+80){
   divis.push(new Division(k,height-divheight/2,10,divheight) );
 }


 for (var j = 75; j <=width; j=j+50) 
    {
    
       plink.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plink.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plink.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plink.push(new Plinko(j,375));
    }

}

function draw() {
  background(0); 
  Engine.update(engine);

  

  
  g1.display();

  for(var k=0;k<divis.length;k++){
    divis[k].display();
  }


  for (var i = 0; i < plink.length; i++) {
     
    plink[i].display();
    
  }

  if(frameCount%60===0){
    part.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < part.length; j++) {
  
    part[j].display();
  }
 // drawSprites();
}