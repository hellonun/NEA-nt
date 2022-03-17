let w = 350;
let w1; // expanding width
let offset = 0;
let speed = 2;
let fi = 0; // fade in
let fo; // fade out

let expand = false;
let started = false;

let restartTime = 900;
let delayTime = 120;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  w1 = 1;
  rw = random(0, windowWidth);
  rh = random(0, windowHeight);
}

function draw() {
  // resetting the frame
  if (frameCount % restartTime == 1) {
    started = true;
    expand = false;
    chance = random(1);
    offset = 0;

    w1 = w;
    background(0);
    fi = 0;
    fill(fi);
    rw = random(0, windowWidth);
    rh = random(0, windowHeight);
  }
  // start expanding
  if (frameCount % delayTime == 0) {
    expand = true;
  }
  if (started) {
    // static square
    if (!expand) {
      fill(fi);
      rect(rw, rh, w, w);
    } else {
      // expanding rectangle
      fill(fi);
      if (chance < 0.5) {
        rect(rw + offset, rh, w1, w);
      } else {
        rect(rw, rh + offset, w, w1);
      }
      // rect(rw, rh, w1, w1);
      w1 += speed * 2;
      offset -= speed;
    }
  }

  fi += 2;
}
