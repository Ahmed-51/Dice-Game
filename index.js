
var r1 = Math.floor(Math.random() * 6) + 1;
var r2 = Math.floor(Math.random() * 6) + 1;


var rs1 = "images/dice" + r1 + ".png";
var rs2 = "images/dice" + r2 + ".png";


document.querySelector(".img1").src= rs1;
document.querySelector(".img2").src= rs2;



if (r1 > r2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (r2 > r1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
