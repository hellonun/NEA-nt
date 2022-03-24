let x = 1;
let y = 1;
let z = 1;

let num = 2; // one more because draws from the middle
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
  d = h;

  strokeWeight(2);
  stroke(255);
  fill(0);
  


  // setup for waves
  for (let y = -height / 2 + w; y < height * 0.5; y += h) {
    for (let x = -width / 2 + h; x < width * 0.5; x += w) {
      tempd = random(0); // change to randomize original point
      ds.push(tempd);
      // if (random(1) > 0.5) {
      //   tempdspeed = random(0, 0.1);
      // } else {
      //   tempdspeed = random(-0.1, 0);
      // }
      tempdspeed = 0.05; 
      dspeeds.push(tempdspeed);

      push();
      translate(x, y, 0);
      box(w, h, d);
      pop();
    }
  }
  // console.log(ds);
}

function draw() {
  if (moosed) {
    moose();
  }

  

  
}

function moose() {
  background(0);
  
  let i = 0;
  for (let y = -height / 2 + w; y < height * 0.5; y += h) {
    for (let x = -width / 2 + h; x < width * 0.5; x += w) {
      ds[i] += dspeeds[i]; 
      // if (ds[i] > 180 || ds[i] < -180) dspeeds[i] *= -1;
      push();
      // translate(x, y, 0);
      // rotateX(-ds[i]/10);
      box(w, h, d);
      rotateX(-ds[i]/5);
      box(w, h, d);
      plane(w, h); 
      rotateX(ds[i]);
      // rotateY(ds[i]/4);
      // rotateZ(ds[i]/8);
      box(w, h, d);
      // plane(w, h); 
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
