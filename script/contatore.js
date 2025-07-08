let timerInterval;
let seconds = 0;
const timerElement = document.getElementById("timer");

// Funzione per aggiornare il contatore
function updateTimer() {
  seconds++;
  timerElement.textContent = seconds;
  sessionStorage.setItem("timerValue", seconds); // Salva nel sessionStorage
}

// Carica il valore dal sessionStorage all'avvio
function loadFromSessionStorage() {
  const storedSeconds = sessionStorage.getItem("timerValue");
  if (storedSeconds) {
    seconds = parseInt(storedSeconds);
    timerElement.textContent = seconds;
  }
}

// Avvia il contatore
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

// Resetta il contatore
function resetTimer() {
  seconds = 0;
  timerElement.textContent = seconds;
  sessionStorage.removeItem("timerValue"); // Rimuovi dal sessionStorage
}

window.addEventListener("load", () => {
  loadFromSessionStorage();
  startTimer();
});
