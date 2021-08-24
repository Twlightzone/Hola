
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var topHead,box1,box2,box3,box4,box5,box6,box7;
var Conball1,Conball2,Conball3,Conball4,Conball5,Conball6;
var B1,B2,B3,B4,B5,B6,B7;
var b1s,b2s,b3s,b4s,b5s,b6s,b7s,b8s,b9s,b10s,b11s,b12s,b13s,b14s,b15s
,b16s,b17s,b18s,b19s,b20s,b21s,b22s
,b23s,b24s,b25s,b26s,b27s,b28s,b29s
,b30s
var win;

var blowerL,blowerR;

var kira,kira2;
var rope1, rope2, rope3, rope4,rope5, rope6;
var bottomHead;
var linker1,linker2,linker3,linker4,linker5,linker6;

var bc_img



function preload()
{
bc_img = loadImage('BackgroundT.png')



}




function setup() {
  createCanvas(1920,965);
  engine = Engine.create();
  world = engine.world;
  title=createElement('h2');
title.html("WINNING IS ALLOWED ONLY WHEN U GET TO THE OUTSKIRS BOXES");

 
topHead = new Block(975,50,8000,20)
  box1 = new Block(100,850,100,500)
  box2 = new Block(480,850,100,500)
  box3 = new Block(860,850,100,500)
  box4 = new Block(1240,850,100,500)
  box5 = new Block(1620,850,100,500)
  box6 = new Block(2025,850,100,500)
 
  B1 = new Block(290,850,100,500);
  B2 = new Block(680,850,100,500);
  B3 = new Block(1070,850,100,500);
  B4 = new Block(1440,850,100,500);
  B5 = new Block(1830,850,100,500);
  B6 = new Block(2215,850,100,500);
  B7 = new Block(2470,850,100,500);
  win = new Block(1550,990,4000,50)

b1s = new Block(671,345,50,50)
b2s = new Block(1519,294,50,50)
b3s = new Block(133,450,50,50)
b4s = new Block(909,362,50,50)
b5s = new Block(281,339,50,50)
b6s = new Block(516,435,50,50)
b7s = new Block(525,279,50,50)
b8s = new Block(763,437,50,50)
b9s = new Block(316,417,50,50)
b10s = new Block(1170,378,50,50)
b11s = new Block(1450,502,50,50)
b12s = new Block(1089,508,50,50)
b13s = new Block(1335,325,50,50)
b14s = new Block(1069,228,50,50)
b15s = new Block(1832,376,50,50)


//1000
  Conball1 = new Ball(1250,80,50,50)
  Conball2 = new Ball(340,80,50,50)
  Conball3 = new Ball(720,80,50,50)
  Conball4 = new Ball(500,80,50,50)
  Conball5 = new Ball(980,80,50,50)
  Conball6 = new Ball(1555,80,50,50)


  //constraint
  rope1 = new Rope (5,{x:1250,y:40});
  rope2 = new Rope (5,{x:340,y:40});
  rope3 = new Rope (5,{x:720,y:40});
  rope4 = new Rope (5,{x:500,y:40});
  rope5 = new Rope (5,{x:980,y:40});
  rope6 = new Rope (5,{x:1555,y:40})
  linker1 = new Link (rope1,Conball1)
  linker2 = new Link (rope2,Conball2)
  linker3 = new Link (rope3,Conball3)
  linker4 = new Link (rope4,Conball4)
  linker5 = new Link (rope5,Conball5)
  linker6 = new Link (rope6,Conball6)

  blowerL = createImg('Blower.png');
  blowerL.position(67,114);
  blowerL.size(100,100);
  blowerL.mouseClicked(GoodoldBlowingLeft);

  blowerR = createImg('Blower.png');
  blowerR.position(1760,114);
  blowerR.size(100,100);
  blowerR.mouseClicked(GoodoldBlowingRight);

  kira = createImg('Detach.png');
  kira.position(75,227);
  kira.size(100,100);
  kira.mouseClicked(Kilaa);
  kira2 = createImg('Detach2.png');
  kira2.position(1768,227);
  kira2.size(100,100);
  kira2.mouseClicked(Kilaa);

  


}


function draw() 
{
background("white");
image(bc_img,0,0,1920,965)

Engine.update(engine);
topHead.show()
box1.show()
box2.show()
box3.show()
box4.show()
box5.show()
box6.show()

B1.show();
B2.show();
B3.show();
B4.show();
B5.show();
B6.show();
B7.show();
win.show()
b1s.show()
b2s.show()
b3s.show()
b4s.show()
b5s.show()
b6s.show()
b7s.show()
b8s.show();
b9s.show()
b10s.show()
b11s.show()
b12s.show()
b13s.show()
b14s.show()
b15s.show()




Conball1.show();
Conball2.show();
Conball3.show();
Conball4.show()
Conball5.show()
Conball6.show();
rope1.show()
rope2.show()
rope3.show()
rope4.show()
rope5.show()
rope6.show()

text(mouseX + "," + mouseY, mouseX, mouseY)
 }

function GoodoldBlowingLeft(){
  Matter.Body.applyForce(Conball1.body,{x:0,y:0},{x:0.01,y:0})
  Matter.Body.applyForce(Conball2.body,{x:0,y:0},{x:0.01,y:0})
  Matter.Body.applyForce(Conball3.body,{x:0,y:0},{x:0.01,y:0})
  Matter.Body.applyForce(Conball4.body,{x:0,y:0},{x:0.01,y:0})
  Matter.Body.applyForce(Conball5.body,{x:0,y:0},{x:0.01,y:0})
  Matter.Body.applyForce(Conball6.body,{x:0,y:0},{x:0.01,y:0})
}
function GoodoldBlowingRight(){
  Matter.Body.applyForce(Conball1.body,{x:0,y:0},{x:-0.01,y:0})
  Matter.Body.applyForce(Conball2.body,{x:0,y:0},{x:-0.01,y:0})
  Matter.Body.applyForce(Conball3.body,{x:0,y:0},{x:-0.01,y:0})
Matter.Body.applyForce(Conball4.body,{x:0,y:0},{x:-0.01,y:0})
Matter.Body.applyForce(Conball5.body,{x:0,y:0},{x:-0.01,y:0})
Matter.Body.applyForce(Conball6.body,{x:0,y:0},{x:-0.01,y:0})
}

function Kilaa(){
  linker1.dettach();
  linker2.dettach();
  linker3.dettach();
  linker4.dettach();
  linker5.dettach();
  linker6.dettach();
}
