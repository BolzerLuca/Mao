let stack = [];
let cardOnTable;
let playedCard;

function setup() {
  createCanvas(400, 400);

  for (let j = 1; j < 5; j++) {
    for (let i = 1; i < 14; i++) {
      stack.push(new kort(j, i));
    }
  }
  NewCardOnTable();
  print(stack);
}

function draw() {
  background(220);
  
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