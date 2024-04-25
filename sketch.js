let baggrund;
let cardArray;
let myHand = [];
let stack = [];
let cardOnTable;
let playedCard;
let cardSizeX = 81;
let cardSizeY = 117;

function preload(){
  baggrund = loadImage('Assets//wood-Texture.png');
  cardArray = loadImage('Assets//kort-Array.png');
  // 81 & 117
}


function setup() {
  NewCardOnTable();
  createCanvas(1000, 700);
  background(baggrund);
  fillStack();
  fillHand();
  kysseMysse();
  print(stack);
  print(myHand);
}

function draw() {
//image(cardArray,width/2,height/2,81,118,myHand[1]*81,myHand[1]*118)
}

function kysseMysse() {
  for (let j = 0; j < 2; j++){
    for (let i = 0; i < 7; i++){
      if(myHand[i+7*j]===undefined){
        break
      }
      image(cardArray,width/4+i*cardSizeX,height-cardSizeY*2+j*cardSizeY,cardSizeX,cardSizeY,myHand[i+7*j].værdi*cardSizeX,myHand[i+7*j].kulør*cardSizeY,cardSizeX,cardSizeY);
    
    }
  }
}

function fillStack() {
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 13; i++) {
      stack.push(new kort(j, i));
    }
  }
}

function fillHand() {
  for (let i = 0; i < 7; i++){
    let tempCard = floor(random(0,stack.length));
    myHand.push(stack[tempCard]);
    stack.splice(tempCard,1);
  
  }
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