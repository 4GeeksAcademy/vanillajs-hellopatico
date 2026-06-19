import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
const dinero = ["euro", "libra", "dolar"];
const metales = ["oro", "plata", "cobre"];
const acciones = ["apple", "amazon", "elon"];
const terminal = [".com", ".net", ".io"];

for (let x = 0; x < dinero.length; x++) {
  for (let y = 0; y < metales.length; y++) {
    for (let z = 0; z < acciones.length; z++) {
      for (let d = 0; d < terminal.length; d++) {
      console.log(dinero[x] + metales[y] + acciones[z] + terminal[d]);
    }
  }
}
}
  console.log("Hello Rigo from the console!");
};
