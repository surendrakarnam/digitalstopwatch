let time = 0;
let running = false;
let interval;


const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');


function updateDisplay() {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;


    display.textContent =
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}.` +
        `${milliseconds.toString().padStart(2, '0')}`;
}


function startTimer() {
    if (!running) {
        running = true;
        interval = setInterval(() => {
            time++;
            updateDisplay();
        }, 10);
    }
}


function stopTimer() {
    if (running) {
        running = false;
        clearInterval(interval);
    }
}


function resetTimer() {
    running = false;
    clearInterval(interval);
    time = 0;
    updateDisplay();
}


startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);


// Initial display
updateDisplay();
