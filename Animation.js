let hexagonCenter;
let particles = [];
let lines = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  hexagonCenter = createVector(width / 2, height / 2);

  for (let i = 0; i < 30; i++) {
    particles.push(new Particle());
  }

  for (let i = 0; i < 5; i++) {
    lines.push(new AnimatedLine(i % 2 === 0)); 
  }
}

function draw() {
  background(248, 249, 250);

  drawHexagon(hexagonCenter.x, hexagonCenter.y, 150);

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0, 200, 0);
  text("Your Text Here", hexagonCenter.x, hexagonCenter.y);

  particles.forEach((particle) => {
    particle.update();
    particle.show();
  });

  
  lines.forEach((line) => {
    line.update();
    line.show();
  });
}

function drawHexagon(x, y, size) {
  stroke(0, 200, 0);
  fill(0, 200, 0, 50);
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let xOffset = x + size * cos(angle);
    let yOffset = y + size * sin(angle);
    vertex(xOffset, yOffset);
  }
  endShape(CLOSE);
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.size = random(4, 20);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  show() {
    noStroke();
    fill(0, 200, 0, 150);
    ellipse(this.x, this.y, this.size);
  }
}

class AnimatedLine {
  constructor(isDashed) {
    this.startX = random([-10, width + 10]);
    this.startY = random(height);
    this.targetX = hexagonCenter.x;
    this.targetY = hexagonCenter.y;
    this.progress = 0;
    this.forward = true;
    this.speed = 0.01;
    this.isDashed = isDashed;
  }

  update() {
    if (this.forward) {
      this.progress += this.speed;
      if (this.progress >= 1) {
        this.forward = false;
      }
    } else {
      this.progress -= this.speed;
      if (this.progress <= 0) {
        this.forward = true;
      }
    }
  }

  show() {
    stroke(0, 200, 0, 150);
    if (this.isDashed) {
      drawingContext.setLineDash([10, 10]);
    } else {
      drawingContext.setLineDash([]);
    }
    let x = lerp(this.startX, this.targetX, this.progress);
    let y = lerp(this.startY, this.targetY, this.progress);
    line(this.startX, this.startY, x, y);
    drawingContext.setLineDash([]);
  }
}