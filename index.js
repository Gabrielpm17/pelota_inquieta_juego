// -----Constantes------
const d = document,
  $ball = d.querySelector(".ball"),
  $points = d.querySelector(".points"),
  $countDown = d.querySelector(".countdown"),
  $interfazPrincipal = d.querySelector(".interfaz-principal"),
  $tituloVenta = d.querySelector(".ventana-principal-titulo"),
  $puntosFinal = d.querySelector(".puntos-final"),
  $btnInicio = d.querySelector(".btn-iniciar");

// -----Variables-----
let x = 0,
  y = 0,
  points = 0,
  setStop,
  segundos = 20;

// ---Funcion para el movimiento de la pelota----
const moveBall = () => {
  x = Math.floor(Math.random() * (1310 - 1) + 1);
  y = Math.floor(Math.random() * (580 - 1) + 1);
  $ball.style.transform = `translate(${x}px, ${y}px)`;
};

// ----Cronometro----
const countDown = () => {
  segundos--;

  if (segundos <= 0) {
    $interfazPrincipal.classList.remove("hidden");
    $btnInicio.classList.add("reiniciar");
    clearInterval(setStop);
    $tituloVenta.textContent = "Tu puntuacion final es: ";
    $puntosFinal.textContent = points;
    $btnInicio.textContent = "reiniciar";
  }

  $countDown.textContent = segundos;
};

// ----Interaccion con la pelota-----
const touchBall = () => {
  points++;
  $points.innerHTML = points;
};

// ----Eventos cargados al Documento----
d.addEventListener("click", (e) => {
  if (e.target.matches(".btn-iniciar")) {
    $interfazPrincipal.classList.add("hidden");

    setInterval(() => {
      moveBall();
    }, 1000);
    setStop = setInterval(() => {
      countDown();
    }, 1000);
  }

  if (e.target.matches(".ball")) {
    touchBall();
  }

  if (e.target.matches(".reiniciar")) {
    segundos = 0;
    location.reload();
  }
});
