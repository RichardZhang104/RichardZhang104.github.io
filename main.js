document.addEventListener("DOMContentLoaded", () => {
    const textToType = document.getElementById("text-to-type").textContent;
    const inputField = document.getElementById("input-field");
    const timerDisplay = document.getElementById("timer");
    const resultsDisplay = document.getElementById("results");

    let startTime;
    let timerInterval;

    function startTimer() {
        startTime = Date.now();
        timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            timerDisplay.textContent = `Time: ${elapsedTime}s`;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    inputField.addEventListener("focus", () => {
        if (!startTime) {
            startTimer();
        }
    });

    inputField.addEventListener("input", () => {
        const typedText = inputField.value;
        if (typedText === textToType) {
            stopTimer();
            resultsDisplay.textContent = `Congratulations! You typed the text correctly in ${timerDisplay.textContent.split(': ')[1]}`;
        }
    });
});

