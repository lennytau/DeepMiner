//DOM elements
const clickMine = document.getElementById("mineButton");

const counterStone = document.getElementById("stoneCounter").childNodes[1];
const counterCoal = document.getElementById("coalCounter").childNodes[1];

//Game variables
const cycleLength = 2000;
var rnumber = Math.random();

const counters = [
  0, //stone
  0, //coal
  0, //copper
  0, //iron
  0, //silver
  0  //gold
]

const totalIncrement = [
  0, //stone
  0, //coal
  0, //copper
  0, //iron
  0, //silver
  0  //gold
]

const probabilities = [
  1, //stone
  0.25, //coal
  0.1, //copper
  0, //iron
  0, //silver
  0  //gold
]



//Mine Button
function mine() {
  counters[0] += 1;
  if (Math.random() >= 1 - probabilities[1]) {
    counters[1] += 1;
    console.log("struck coal")
  };
  counterStone.innerText = counters[0];
  counterCoal.innerText = counters[1];
}

//Game Loop
window.setInterval(function () {
  rnumber = Math.random();
  //console.log(rnumber);

  counters[0] += totalIncrement[0];
  if (rnumber >= 1 - probabilities[1]) {
    counters[1] += totalIncrement[0];
  };
  
  
  counterStone.innerText = counters[0];
  counterCoal.innerText = counters[1];
}, cycleLength);