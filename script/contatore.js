let timerInterval;
let seconds = 0;
const timerElement = document.getElementById("timer");

// Funzione per aggiornare il contatore
function updateTimer() {
  seconds++;
  timerElement.textContent = seconds;
  localStorage.setItem("timerValue", seconds); // Salva nel localStorage
}

// Carica il valore dal localStorage all'avvio
function loadFromLocalStorage() {
  const storedSeconds = localStorage.getItem("timerValue");
  if (storedSeconds) {
    seconds = parseInt(storedSeconds);
    timerElement.textContent = seconds;
  }
}

function unloadFromLocalStorage() {
  localStorage.clear();
}

// Avvia il contatore
function startTimer() {
  if (!timerInterval) {
    // Evita più intervalli attivi
    timerInterval = setInterval(updateTimer, 1000);
  }
}

// Resetta il contatore
function resetTimer() {
  stopTimer();
  seconds = 0;
  timerElement.textContent = seconds;
  localStorage.removeItem("timerValue"); // Rimuovi dal localStorage
}

window.addEventListener("load", () => {
  loadFromLocalStorage();
  startTimer();
});

window.addEventListener("beforeunload", resetTimer);
