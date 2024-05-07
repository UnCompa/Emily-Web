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

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('button');
  var audioPermissionPrompt = document.getElementById('audioPermissionPrompt');

  button.addEventListener('click', function() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ audio: true })
          .then(function(stream) {
              // Permiso concedido
              console.log('Permiso de audio concedido');
              audioPermissionPrompt.innerText = 'Permiso de audio concedido';
          })
          .catch(function(error) {
              // Permiso denegado
              console.error('Error al obtener permiso de audio:', error);
              audioPermissionPrompt.innerText = 'Error al obtener permiso de audio';
          });
      } else {
          console.error('getUserMedia no está soportado en este navegador');
          audioPermissionPrompt.innerText = 'getUserMedia no está soportado en este navegador';
      }
  });
});

