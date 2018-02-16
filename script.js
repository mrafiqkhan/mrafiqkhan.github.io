const color1 = document.querySelector("[name='color1']"); // color input element
const color2 = document.querySelector("[name='color2']"); // color input element 
const body = document.querySelector("body");
const container = document.querySelector(".container");
const h4 = document.querySelector("h4");
 const sp1 = document.querySelector("#c1"); // span element with #c1 id
 const sp2 = document.querySelector("#c2"); // span element with #c2 id
//const h1 = document.querySelector("h1");

color1.addEventListener('input', changeBgColor);
color2.addEventListener('input', changeBgColor);

// invoke the function onload to set the bg
firstTimeBg();


// function invokes on input event
// get the current value of the both the color inputs
// set it to the background;
function changeBgColor() {
  let c1 = color1.value;
  let c2 = color2.value;
  let sp1 = document.querySelector("#c1");
  let sp2 = document.querySelector("#c2");


  body.style.backgroundImage = "linear-gradient(to left," + c1 + ", " + c2 + ")";
  sp1.innerText = c1;
  sp1.style.backgroundColor = c1;
  sp2.innerText = c2;
  sp2.style.backgroundColor = c2;
  color1.value = c1;
  color2.value = c2;
}


/* firstTimeBg set the body to random linear gradient color
 */
function firstTimeBg() {
  let c1 = generateHexValue(),
    c2 = generateHexValue();


  body.style.backgroundImage = "linear-gradient(to left," + c1 + ", " + c2 + ")";

  sp1.innerText = c1;
  sp1.style.backgroundColor = c1;
  sp2.innerText = c2;
  sp2.style.backgroundColor = c2;
  color1.value = c1;
  color2.value = c2;

}

/** generateHexValue returns an Hexadecimal number */
function generateHexValue() {
  let hex = "#";

  for (let i = 1; i <= 6; i++) {
    hex += numberDecision(Math.floor(Math.random() * 16))
  }
  return hex;

}
/**
 *This function decides if the number is greater then 9
 *it returns a character between a to f according to the hex value
 * @param {integer} val
 */
function numberDecision(val) {
  let value = val;
  if (value > 9) {
    switch (value) {
      case 10:
        value = "a";
        break;
      case 11:
        value = "b";
        break;
      case 12:
        value = "c";
        break;
      case 13:
        value = "d";
        break;
      case 14:
        value = "e";
        break;
      case 15:
        value = "f";
        break;
    }
  }
  return value;
}
