function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  colorMode(HSB,100);
  for (var x = 10; x < width-10; x = x + 10) {
    line(x, height/2, mouseX, mouseY);
    stroke(x, height/5, mouseX, mouseY);
  }
}
