var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var cssText = document.querySelector("h3");
var body = document.querySelector("#gradient");

var button = document.querySelector("button");

function backgroundColorChange() {
	body.style.background = "linear-gradient(to right, "
	+ input1.value + ", "
	+ input2.value + ")";

	cssText.textContent = body.style.background + ";";
}
function setRandomColors() {
	var randomNumber1 = Math.floor(Math.random() * 256) ;
	var randomNumber2 = Math.floor(Math.random() * 256) ;
	var randomNumber3 = Math.floor(Math.random() * 256) ;
	var randomNumber4 = Math.floor(Math.random() * 256) ;
	var randomNumber5 = Math.floor(Math.random() * 256) ;
	var randomNumber6 = Math.floor(Math.random() * 256) ;

	var randomColor1 = rgbToHex(randomNumber1, randomNumber2, randomNumber3);
  	var randomColor2 = rgbToHex(randomNumber4, randomNumber5, randomNumber6);

	input1.value = randomColor1;
	input2.value = randomColor2;

	backgroundColorChange();
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

input1.addEventListener("input", backgroundColorChange);
input2.addEventListener("input", backgroundColorChange);
button.addEventListener("click", setRandomColors);