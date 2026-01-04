// this is gonna be for men card buttons

let countrmen = document.getElementById("menAmountIndicator"); // this is the indicator.
let countersum = document.getElementById("sumOfAllIndicator"); // this is for sum indicator

let countermen = 0;

function menIncrement() {
  //after pressing add button this function will be trigerd! we should put this function name in the element in html file.
  countermen = countermen + 1;
  countrmen.innerText = countermen; // this were we say the html element should be change to the amount the funtion produces.
  countersum.innerText = countermen + womenCounter + childsCountr; // this is for sum indicator

  console.log("button was clicked!");
}

function menReset() {
  countermen = 0;
  countrmen.innerText = countermen;
  countersum.innerText = countermen + womenCounter + childsCountr;
}

//this is women card buttons
let womenCountr = document.getElementById("womenAmountIndicator");
let womenCounter = 0;

function womenIncrement() {
  womenCounter = womenCounter + 1;
  womenCountr.innerText = womenCounter;
  countersum.innerText = countermen + womenCounter + childsCountr; // this is for sum indicator
}

function womenReset() {
  womenCounter = 0;
  womenCountr.innerText = womenCounter;
  countersum.innerText = countermen + womenCounter + childsCountr;
}
//this is childs card buttons
let childsCounter = document.getElementById("childsAmountIndicator");
let childsCountr = 0;

function childsIncrement() {
  childsCountr = childsCountr + 1;
  childsCounter.innerText = childsCountr;
  countersum.innerText = countermen + womenCounter + childsCountr; // this is for sum indicator
}

function childsReset() {
  childsCounter.innerText = 0;
  childsCountr = 0;
  countersum.innerText = countermen + womenCounter + childsCountr; // this is for sum indicator
}
