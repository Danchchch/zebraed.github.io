let backgroundImg;
let head1;
let head2;
let head3;
let arms1;
let arms2;
let buckle;
let buckleHighlight;
let win;
let anchorHighlight;
let anchor;
let anchorMoving;
let windowNormal;
let windowCracked;
let windowHighlight;
let windowCrackedHighlight;
let cat;
let catHighlight;
let catAngry;
let catAngryHighlight
let cursor1;
let cursor2;
let anchoractive = false;
let catactive = false;
let windowactive = false;
let buckleactive = false;

function preload() {
  backgroundImg = loadImage('/images/bg_00.svg');
  anchor = loadImage('/images/seatbelt_anchor1.svg');
  head1 = loadImage('/images/head_01.svg');
  head2 = loadImage('/images/head_02.svg');
  head3 = loadImage('/images/head_03.svg');
  arms1 = loadImage('/images/arms_01.svg');
  arms2 = loadImage('/images/arms_02.svg');
  windowNormal = loadImage('/images/window_01.svg');
  windowCracked = loadImage('/images/window_02.svg');
  windowHighlight = loadImage('/images/window_03.svg');
  windowCrackedHighlight = loadImage('/images/window_04.svg');
  cat = loadImage('/images/cat_01.svg');
  buckle = loadImage('/images/seatbelt_buckle1.svg');
  buckleHighlight = loadImage('/images/seatbelt_buckle2.svg');
  win = loadImage('/images/bg_03.svg');
  anchorHighlight = loadImage('/images/seatbelt_anchor3.svg');
  anchorMoving = loadImage('/images/z-seatbelt.svg');
  catHighlight = loadImage('/images/cat_02.svg');
  catAngry = loadImage('/images/cat_03.svg');
  catAngryHighlight = loadImage('/images/cat_04.svg');
}

function setup() {
  let canvas = createCanvas(1029, 779);
  canvas.id("myActivity");
}

function start() {
  document.getElementById("myActivity").style.display = "block";
  document.getElementById("start").style.display = "none";
}

function draw() {
  if (anchoractive == false && catactive == false && windowactive == false && buckleactive == false) {
  image(windowNormal, 0, 0);
  image(backgroundImg, 0, 0);
  image(arms1, 0, 0);
  image(cat, 0, 0);
  image(buckle, 0, 0);

  // highlighting the anchor
  if (mouseX > 620 && mouseX < 699 && mouseY > 260 && mouseY < 325) {
    image(anchorHighlight, 0, 0);
    cursor('/images/Asset_4.png');
  } else {
    image(anchor, 0, 0);
    cursor('/images/Asset_3.png');
  }

  // head changes
    if (mouseX < 200 || mouseX > 909 || mouseY < 80 || mouseY > 619) {
    image(head2, 0, 0);
  } else if (mouseX > 500 && mouseX < 729 && mouseY > 200 && mouseY < 379) {
    image(head3, 0, 0);
  } else {
    image(head1, 0, 0);
  }

  } // first if

  if (anchoractive == true && catactive == false && windowactive == false && buckleactive == false) {
  
  if (mouseX > 620 && mouseY < 369) {
  image(windowHighlight, 0, 0);
  } else {
  image(windowNormal, 0, 0);
  }

  image(backgroundImg, 0, 0);
  image(arms2, 0, 0);

  if (mouseY > 510 && mouseX < 254 && mouseY < 639) {
    image(catHighlight, 0, 0);
  } else {
    image(cat, 0, 0);
  }

  if (mouseY < 624 && mouseX < 304 && mouseX > 260 && mouseY > 545) {
    image(buckleHighlight, 0, 0);
  } else {
    image(buckle, 0, 0);
  }

  image(head1, 0, 0);
  image(anchorMoving, mouseX-17, mouseY-17);

  } // second if (anchor active)

  if (anchoractive == false && catactive == false && windowactive == true && buckleactive == false) {

    if (mouseX > 890 && mouseY > 150 && mouseX < 959 && mouseY < 264) {
      cursor('/images/Asset_4.png');
      image(windowCrackedHighlight, 0, 0);
      } else {
      cursor('/images/Asset_3.png');
      image(windowCracked, 0, 0);
      }
  
  image(backgroundImg, 0, 0);
  image(arms1, 0, 0);
  image(cat, 0, 0);
  image(buckle, 0, 0);
  image(head2, 0, 0);

  } // third if (window broken, anchor in wall)

  if (anchoractive == false && catactive == true && windowactive == false && buckleactive == false) {

  image(windowNormal, 0, 0);
  image(backgroundImg, 0, 0);

  if (mouseY > 575 && mouseX < 229 && mouseY < 629 && mouseX > 165) {
    cursor('/images/Asset_4.png');
    image(catAngryHighlight, 0, 0);
  } else {
    cursor('/images/Asset_3.png');
    image(catAngry, 0, 0);
  }

  image(arms1, 0, 0);
  image(buckle, 0, 0);
  image(head2, 0, 0);

  } // fourth if (cat angry)

  if (anchoractive == false && catactive == false && windowactive == false && buckleactive == true) {

  image(win, 0 , 0);
  cursor('/images/Asset_3.png');

  document.getElementById("again").style.display = "block"

  } // fifth if (win)

} // draw function

function mousePressed() {
  if (catactive == false && windowactive == false && mouseX > 620 && mouseX < 699 && mouseY > 260 && mouseY < 325) {
    anchoractive = true;
    noCursor();
  } else if (windowactive == true && mouseX > 890 && mouseY > 150 && mouseX < 959 && mouseY < 264) {
    anchoractive = true;
    windowactive = false;
    noCursor();
  } else if (catactive == true && mouseY > 575 && mouseX < 229 && mouseY < 629 && mouseX > 165) {
    anchoractive = true;
    catactive = false;
    noCursor();
  }
}

function mouseReleased() {
  if (anchoractive == true && mouseX > 620 && mouseY < 369) {
    windowactive = true;
    }

  if (anchoractive == true && mouseY > 510 && mouseX < 254 && mouseY < 639) {
    catactive = true;
    }

  if (anchoractive == true && mouseY < 624 && mouseX < 304 && mouseX > 260 && mouseY > 545) {
    buckleactive = true;
    }
  

    anchoractive = false;
}

// Capcha code

let buttonA = document.getElementById("wrongA");
let buttonB = document.getElementById("wrongB");
let buttonC = document.getElementById("right");
let buttonD = document.getElementById("wrongC");

let x = document.getElementById("capcha1");
x.style.display = "none";
y = document.getElementById("message");
y.style.display = "none";
let a = false;
let b = false;
let c = false;
let d = false;

let name;

function capcha(page){
  let x = document.getElementById("capcha1");
  if (x.style.display === "none") {
    x.style.display = "block";
    buttonA.style.backgroundColor = "white";
    buttonB.style.backgroundColor = "white";
    buttonC.style.backgroundColor = "white";
    buttonD.style.backgroundColor = "white";
  } 

name = page;
}

function check(){
  if (a==false && b==false && c==false && d==false){
    y.style.display = "block";
    console.log(a, b, c, d)
  } else {
    y.style.display = "none";
  }

  if (c==true) {
    window.open(name);
  } else if (a == true) {
    buttonA.style.backgroundColor = "red";
  } else if (b == true) {
    buttonB.style.backgroundColor = "red";
  } else if (d == true) {
    buttonD.style.backgroundColor = "red";
  }
}

function wrongA() {
  a = true;
  b = false;
  c = false;
  d = false;
  buttonA.style.backgroundColor = "black";
  buttonB.style.backgroundColor = "white";
  buttonC.style.backgroundColor = "white";
  buttonD.style.backgroundColor = "white";
  console.log(a, b, c, d)
}

function wrongB() {
  a = false;
  b = true;
  c = false;
  d = false;
  buttonB.style.color = "white";
  buttonB.style.backgroundColor = "black";
  buttonA.style.color = "black";
  buttonA.style.backgroundColor = "white";
  buttonC.style.color = "black";
  buttonC.style.backgroundColor = "white";
  buttonD.style.color = "black";
  buttonD.style.backgroundColor = "white";
}

function right() {
  a = false;
  b = false;
  c = true;
  d = false;
  buttonC.style.color = "white";
  buttonC.style.backgroundColor = "black";
  buttonA.style.color = "black";
  buttonA.style.backgroundColor = "white";
  buttonB.style.color = "black";
  buttonB.style.backgroundColor = "white";
  buttonD.style.color = "black";
  buttonD.style.backgroundColor = "white";
}

function wrongC() {
  a = false;
  b = false;
  c = false;
  d = true;
  buttonD.style.color = "white";
  buttonD.style.backgroundColor = "black";
  buttonA.style.color = "black";
  buttonA.style.backgroundColor = "white";
  buttonB.style.color = "black";
  buttonB.style.backgroundColor = "white";
  buttonC.style.color = "black";
  buttonC.style.backgroundColor = "white";
}

function hideCapcha() {
  x.style.display = "none";
}