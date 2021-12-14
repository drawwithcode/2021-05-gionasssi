let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);
clientSocket.on("name1Broadcast", newBroadcast1);
clientSocket.on("name2Broadcast", newBroadcast2);
clientSocket.on("scelta", newBroadcast3);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data)
  stroke("red")
  strokeWeight(10)
  line(data.px,data.py,data.x,data.y)
  console.log(data) 
}





let input1;
let input2;

let player1 = "QUALCUNO";
let player2 = "QUALCUNO";

let xStart = 0;
let xStart2 = 0;

let scelta;

let banner = "TAG YO SELF"

function preload() {
  sticker1 = loadImage("assets/sticker1.png")
  sticker2 = loadImage("assets/sticker2.png")
  regole1 = loadImage("assets/regole1.png")
  regole2 = loadImage("assets/regole2.png")
  regole3 = loadImage("assets/regole3.png")
  // istruzioni = loadImage("assets/regole.png")
  // myFont = loadFont("assets/Everett-Medium.ttf")
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background("#00726c");
    // imageMode(CENTER)
    // image(istruzioni, width/2, height/2 -100, 600, 600)
    push()
    translate(width/2, height/2)
    scale(1,3)
    textAlign(CENTER, CENTER)
    textSize(120)
    fill("whyte")
    text("TAG YO SELF", 0, 20)
    pop()

    imageMode(CENTER)
    image(regole1, width/2 - 450,height/2 - 50, 300, 300)
    image(regole2, width/2 - 100,height/2 + 180, 300, 300)
    image(regole3, width/2 + 150,height/2 - 130, 300,300)
    

           button4 = createButton("TAG");
    button4.position(width/2+280, 7*height/10-80);
    button4.mousePressed(startGame);
           button4.style("font-size", "100px")
           button4.style("border-radius", "30px")
           button4.style("border", "0px")
           button4.style("background-color", "#ff1e00")
    
           scelta = random(0,2)
           let message3 = {
                scelta: scelta
              }
              clientSocket.emit("scelta", message3);
  }

  function startGame() {
    background("#00726c");
    fill("black")
    rect(width/2,0,width/2, height)
  
    imageMode(CENTER)
    image(sticker1, width/4,height/2+30, 600, 600)
    image(sticker2, 3*width/4,height/2+30, 600, 600)
  
    textAlign(CENTER, CENTER); 
    textSize(20)
  
    input1 = createInput();
    input1.position(20, 130);
          input1.style("height", "25px")
          input1.style("font-size", "20px")
          input1.style("border-radius", "5px")
          input1.style("border", "0px")
          input1.style("background-color", "#8777ff")
          
    button1 = createButton("PARTECIPA")
    button1.position(300, 130)
    button1.mousePressed(partecipa1)
          button1.style("height", "30px")
          button1.style("font-size", "20px")
          button1.style("border-radius", "5px")
          button1.style("border", "0px")
          button1.style("background-color", "#ff1e00")
  
    input2 = createInput();
    input2.position(width-290, 130)
          input2.style("height", "25px")
          input2.style("font-size", "20px")
          input2.style("border-radius", "5px")
          input2.style("border", "0px")
          input2.style("background-color", "#8777ff")
  
    button2 = createButton("PARTECIPA")
    button2.position(width-430, 130)
    button2.mousePressed(partecipa2)
           button2.style("height", "30px")
           button2.style("font-size", "20px")
           button2.style("border-radius", "5px")
           button2.style("border", "0px")
           button2.style("background-color", "#ff1e00")
  
    button3 = createButton('CHI HA SPACCATO?');
    button3.position(width/2-185, 9*height/10);
    button3.mousePressed(greet);
           button3.style("font-size", "40px")
           button3.style("border-radius", "5px")
           button3.style("border", "0px")
           button3.style("background-color", "#ff1e00")
    
    button4.html("NUOVA BATTLE")
    button4.position(width/2-75, 9*height/10-40)
    button4.style("font-size", "20px")
    button4.style("background-color", "#8777ff")
    player1 = "QUALCUNO";
    player2 = "QUALCUNO"
    banner = "TAG YO SELF"
  }
  
  function partecipa1() {
    const name1 = input1.value();
    input1.value('');
    player1 = name1

    let message1 = {
      name1: name1
    }
    clientSocket.emit("player1", message1);
  }

  function partecipa2() {
    const name2 = input2.value();
   input2.value(''); 
   player2 = name2

   let message2 = {
    name2: name2
  }
  clientSocket.emit("player2", message2);
  }
  
  function greet() {
    if (scelta > 1) {
  
    for (let i = 0; i < 10; i++) {
      fill("#ff1e00")
      rect(width/2,0,width/2,height)
      push();
      fill("#8777ff");
      strokeWeight(3)
      textSize(100)
      textAlign(CENTER)
      textWidth(800)
      translate(width/2, height/2);
      textStyle(ITALIC)
      text("GIANNI SPRAYCAN", 0, -50);
      textStyle(NORMAL)
      text("DICE CHE", 0, 50);
      text(player1 + " SPINGE", 0, 150);
      pop();
  
      banner = player1 + " SPINGE"
    }
  } else {
    for (let i = 0; i < 10; i++) {
      fill("#00726c")
      rect(0,0,width/2,height)
      push();
      fill("#ff1e00");
      strokeWeight(3)
      textSize(100)
      textAlign(CENTER)
      textWidth(800)
      translate(width/2, height/2);
      textStyle(ITALIC)
      text("GIANNI SPRAYCAN", 0, -50);
      textStyle(NORMAL)
      text("DICE CHE", 0, 50);
      text(player2 + " SPACCA", 0, 150);
      pop();
  
      banner = player2 + " SPACCA"
      }
    }

  }

function draw() {
  if (mouseIsPressed) {
    stroke("black")
    strokeWeight(10)
    line(pmouseX,pmouseY,mouseX,mouseY)

  
  let message = {
    x: mouseX,
    y: mouseY,
    px: pmouseX,
    py: pmouseY,
  }
  clientSocket.emit("mouse", message);
}

push()
noStroke()
rectMode(CENTER)
fill("#ff1e00")
rect(width/2,90,width,40)
fill("black")
rect(width/2,35,width,70)
pop()


noStroke()
textAlign(LEFT, CENTER)
textSize(20)
fill("whyte")
for (let x = xStart; x < width; x += 350){
text(player1 + " VS " + player2, x, 90)
}
textSize(50)
fill("whyte")
for (let x = xStart2+150; x < width; x += 550){
text(banner, x, 35)
}

xStart = xStart-2;
xStart2--;
}

function newBroadcast1(data) {
  console.log(data)
  player1 = data.name1
}

function newBroadcast2(data) {
  console.log(data)
  player2 = data.name2
}

function newBroadcast3(data) {
  console.log(data)
  scelta = data.scelta

  // if (data.scelta > 1) {
  
  //   for (let i = 0; i < 10; i++) {
  //     fill("#ff1e00")
  //     rect(width/2,0,width/2,height)
  //     push();
  //     fill("#ff1e00");
  //     stroke("black")
  //     strokeWeight(3)
  //     textSize(100)
  //     textAlign(CENTER)
  //     textWidth(800)
  //     translate(width/2, height/2);
  //     textStyle(ITALIC)
  //     text("JIMMY SPRAYCAN", 0, -50);
  //     textStyle(NORMAL)
  //     text("DICE CHE", 0, 50);
  //     text(player1 + " SPINGE", 0, 150);
  //     pop();
  
  //     banner = player1 + " SPINGE"
  //   }
  // } else {
  //   for (let i = 0; i < 10; i++) {
  //     fill("#025448")
  //     rect(0,0,width/2,height)
  //     push();
  //     fill("#ff1e00");
  //     stroke("black")
  //     strokeWeight(3)
  //     textSize(100)
  //     textAlign(CENTER)
  //     textWidth(800)
  //     translate(width/2, height/2);
  //     textStyle(ITALIC)
  //     text("TIMMY THROW-UP", 0, -50);
  //     textStyle(NORMAL)
  //     text("DICE CHE", 0, 50);
  //     text(player2 + " SPACCA", 0, 150);
  //     pop();
  
  //     banner = player2 + " SPACCA"
  //     }
  //   }
}
