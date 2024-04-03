let stack = [];

function setup() {
  createCanvas(400, 400);

  for (let j = 1; j < 5; j++) {
    for (let i = 1; i < 14; i++) {
      stack.push(new kort(j, i));
    }
  }
  print(stack);
}

function draw() {
  background(220);
  
}
