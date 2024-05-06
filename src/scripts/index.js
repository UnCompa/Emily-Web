import Typed from "typed.js";
import confetti from "canvas-confetti";
let options = {
  strings: ["La mejor chica que puedes conocer ❤", "Una chica amable y simpatica", "Su pasion por los videojuegos","Su forma de ser reservada","Emily adora ver peliculas"], // Texto que se escribirá
  typeSpeed: 20,
  smartBackspace: true,
  backSpeed: 30,
  backDelay: 2000,
  showCursor: false,
  cursorChar: '|',
  shuffle: true,
  loop: true, // Establece si quieres que el texto se repita después de escribirlo
};
var myConfetti = {
  particleCount: 100, // Cantidad de corazones
  spread: 100, // Área de dispersión
  angle: 90, // Ángulo de dispersión
  origin: { y: 0.6 }, // Origen de la dispersión (parte superior)
  colors: ["#ff0000", "#ff69b4"], // Colores de los corazones
  shapes: ["heart"], // Forma del confeti (corazones)
  zIndex: 1000, // Z-index para asegurar que esté encima de otros elementos
};
confetti(myConfetti);
var typed = new Typed("#description", options);
