let x = 1;
let y = 1;
let z = 1;

let num = 5; // one more because draws from the middle
let w, h, d; // width, height, depth of internal squares
let ds = []; // depths

let dspeed = 1;
let dspeeds = [];

let moosed = false;

function setup() {
  createCanvas(1080, 1080, WEBGL);
  background(0);
  angleMode(DEGREES);
  w = width / num;
  h = height / num;
  // d = 20;

  strokeWeight(2);
  stroke(255);
  fill(0);

  // setup for waves
  for (let y = -height / 2 + w; y < height * 0.5; y += h) {
    for (let x = -width / 2 + h; x < width * 0.5; x += w) {
      tempd = random(0); // change to randomize original point
      ds.push(tempd);
      if (random(1) > 0.5) {
        tempdspeed = random(0, 0.5);
      } else {
        tempdspeed = random(-0.5, 0);
      }
      dspeeds.push(tempdspeed);

      push();
      translate(x, y, 0);
      box(w, h, 200);
      pop();
    }
  }
  // console.log(ds);
}

function draw() {
  if (moosed) {
    background(0);
    moose();
  }
}

function moose() {
  let i = 0;

  for (let y = -height / 2 + w; y < height * 0.5; y += h) {
    for (let x = -width / 2 + h; x < width * 0.5; x += w) {
      ds[i] += dspeeds[i];
      if (ds[i] > 0 || ds[i] < -50) dspeeds[i] *= -1;
      push();
      translate(x, y, ds[i]);
      box(w, h, 200);
      pop();
      i++;
    }
  }
}

function keyPressed() {
  if (key === "m") {
    moosed = true;
  }
}
