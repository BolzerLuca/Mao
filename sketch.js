let baggrund;
let cardArray;
let myHand = [];
let stack = [];
let cardOnTable, playedCard, playedSevens, playedFours, calledSevens, calledFours, twinsInARow, calledTwins, punishmentsToReceive = 0;
let reasonsForPunishment = '';
let calledCard = false;
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
  NewCardOnTable();
  playedCard = stack[floor(random(0, stack.length))];
  checkPunishments();
  print(cardOnTable);
  print(playedCard);
  print(isCardLegal());
  print(punishmentsToReceive);
  print(reasonsForPunishment);
}

function fillHand() {
  for (let i = 0; i < 7; i++){
    let tempCard = floor(random(0,stack.length));
    myHand.push(stack[tempCard]);
    stack.splice(tempCard,1);
  
  }
function draw() {
  background(220);
  // TODO giv fejl ved for langt tid brugt
  // TODO fjern det her senere (Det er knappen)
  fill('green');
  rect(width/2, height/2, 150, 100);

}

function NewCardOnTable() {
  let tempRandomFromStack = floor(random(0, stack.length));
  cardOnTable = stack[tempRandomFromStack];
  stack.splice(tempRandomFromStack, 1);
}

function mousePressed() {
  // TODO Lav ting ting der bestemmer hvilket kort man trykker på
  // TODO Når fejlkort gives, check om stack er tom og fyld i det tilfælde
  // TODO Brug denne metode også til 7'ere, spar kald og tvilling men sæt knapperne ordenligt
  if (mouseX < width/2 + 150 && mouseX > width/2 && mouseY < height/2 + 100 && mouseY > height/2) {
    calledFours += 1;
  }
  // TODO skift spillers tur
}

function checkPunishments() {
  if (isCardLegal() == false) {
    punishmentsToReceive += 1;
    reasonsForPunishment = reasonsForPunishment + "Du kan ikke lægge dette kort på \n"
    return;
  }
  if (playedCard.værdi == 5) {
    playedSevens++;
    rigtigGodDag();
  }
  if (playedCard.værdi == 2) {
    playedFours++;
    mangeTak();
  }
  if (playedCard.kulør == 3) {
    calledSpar();
  }
  if (valueMatching() == true) {
    twinsInARow += 1;
    if (twinsInARow != calledTwins) {
      punishmentsToReceive++;
      reasonsForPunishment = reasonsForPunishment + "Du sagde ikke tvilling \n"
    }
  } else {
    twinsInARow = 0;
  }
}

function isCardLegal() {
  if (houseMatching() || valueMatching()) {
      return true;
    } else {
      return false;
    }
}

function valueMatching() {
  if (playedCard.værdi == cardOnTable.værdi) {
    return true;
  }
}

function houseMatching() {
  if (playedCard.kulør == cardOnTable.kulør) {
    return true;
  }
}

function rigtigGodDag() {
  if (playedSevens != calledSevens) {
    punishmentsToReceive += 1;
    reasonsForPunishment = reasonsForPunishment + "Du sagde ikke hav en god dag \n"
  }
}

function mangeTak() {
  if (playedFours != calledFours) {
    punishmentsToReceive += 1;
    reasonsForPunishment = reasonsForPunishment + "Du sagde ikke tak \n"
  }
}

function calledSpar() {
  if (calledCard === false) {
    punishmentsToReceive += 1;
    reasonsForPunishment = reasonsForPunishment + "Du sagde ikke spar \n"
  }
}

function doesCardModifyGame() {
  // Tjekker om der spilles knægt
  if (playedCard.værdi == 9) {
    // TODO spring en spiller over
    return;
  }
  // Tjekker om der spilles dronning
  if (playedCard == 10) {
    // TODO vend retningen
  }
}