let bg;
let kA;
let stack = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
let myHand = [];

function preload(){
  bg = loadImage('Assets//wood-Texture.png');
  kA = loadImage('Assets//kort-Array.png');
  // 81 & 118

}

function setup() {
  createCanvas(1000, 700);
  background(bg);

  for (let i = 0; i < 7; i++){
    let temp = round(random(0,stack.length));
    console.log(temp)
    myHand.push(stack[temp]);
    stack.splice(temp,1);
  
  }
  console.log(stack)
  console.log(myHand)
}

function draw() {
//image(kA,width/2,height/2,81,118,myHand[1]*81,myHand[1]*118)
}
