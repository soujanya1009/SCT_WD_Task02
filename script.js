
let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;
const display = document.querySelector(".display");
const lapsContainer = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 20);
    }
});

document.getElementById("pause").addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
    seconds = minutes = hours = 0;
    display.innerText = "00:00:00";
    lapsContainer.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
    if (isRunning) {
        const lapTime = document.createElement("li");
        lapTime.innerText = display.innerText;
        lapsContainer.appendChild(lapTime);
    }
});

function updateTime() {
    seconds++;
    if (seconds === 60) { seconds = 0; minutes++; }
    if (minutes === 60) { minutes = 0; hours++; }

    display.innerText = 
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}`;
}


