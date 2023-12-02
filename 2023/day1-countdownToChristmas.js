const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    const remainingDays = christmas - new Date().getDate();
    countdownDisplay.innerText = remainingDays;
}
 
renderCountdown();