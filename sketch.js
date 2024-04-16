let bg;
let kA;
let myHand = [];
function preload(){
  bg = loadImage('Assets//wood-Texture.png');
  kA = loadImage('Assets//kort-Array.png');
  // 81 & 118
}
let stack = [];
let cardOnTable;
let playedCard;

function setup() {

  for (let j = 1; j < 5; j++) {
    for (let i = 1; i < 14; i++) {
      stack.push(new kort(j, i));
    }
  }
  NewCardOnTable();
  print(stack);
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

function NewCardOnTable() {
  let tempRandomFromStack = int(random(0, stack.length));
  cardOnTable = stack[tempRandomFromStack];
  stack.splice(tempRandomFromStack, 1);
}

function mousePressed() {
  // TODO: Lav ting ting der bestemmer hvilket kort man trykker på
  // TODO: Når fejlkort gives, check om stack er tom og fyld i det tilfælde
  
}

function valueMatching() {
  if (playedCard == cardOnTable) {
    return true;
  }
}