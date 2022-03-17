let w = 800;
let h = 800;
let num = 3;
let sqw, sqh; // square width, square height
let i, pIndex, cIndex; // previous index, current index
let possibilities = [];
let t;
let f1 = 0; // fade in
let f2 = 255; // fade out

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  sqw = windowWidth / num;
  sqh = windowHeight / num;

  background(0);

  cIndex = round(random(num * num));
}

function draw() {
  i = 0;

  if (frameCount % 360 == 0) {
    background(0);
    pIndex = cIndex;
    f2 = f1; 
    f1 = 0;

    if (cIndex == 0) {
      // topleft corner
      possibilities = [cIndex + 1, cIndex + num];
    } else if (cIndex == num - 1) {
      // topright corner
      possibilities = [cIndex - 1, cIndex + num];
    } else if (cIndex == num * num - num) {
      // bottomleft corner
      possibilities = [cIndex + 1, cIndex - num];
    } else if (cIndex == num * num - 1) {
      // bottomright corner
      possibilities = [cIndex - 1, cIndex - num];
    } else if (cIndex < num) {
      // top edge
      possibilities = [cIndex - 1, cIndex + 1, cIndex + num];
    } else if (num * num - num < cIndex) {
      //bottom edge
      possibilities = [cIndex - 1, cIndex + 1, cIndex - num];
    } else if (cIndex % num == 0) {
      //left edge
      possibilities = [cIndex + 1, cIndex - num, cIndex + num];
    } else if (cIndex % num == num - 1) {
      //right edge
      possibilities = [cIndex - 1, cIndex - num, cIndex + num];
    } else {
      possibilities = [cIndex - 1, cIndex + 1, cIndex - num, cIndex + num];
    }

    cIndex = floor(random(possibilities.length));
    cIndex = possibilities[cIndex];
  }

  for (let y = 0; y < num; y++) {
    for (let x = 0; x < num; x++) {
      if (i == cIndex) {
        fill(f1);
        rect(x * sqw, y * sqh, sqw, sqh);
      }
      if (i == pIndex) {
        fill(f2);
        rect(x * sqw, y * sqh, sqw, sqh);
      }

      // text(i, x * sqw, y * sqh);

      i++;
    }
  }

  f1 += 0.5;
  f2 -= 0.5;
}
