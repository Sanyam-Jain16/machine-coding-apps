let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Format numbers to 2 digits
function formatTime(num) {
  return num.toString().padStart(2, "0");
}

// Update the timer display
function updateDisplay() {
  timerDisplay.textContent = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;
}

// Start the stopwatch
function startTimer() {
  if (timerInterval) return; // Prevent multiple intervals
  timerInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

// Stop the stopwatch
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// Reset the stopwatch
function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

// Event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
