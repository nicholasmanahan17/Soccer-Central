/* =========================================================
   Not_Void's Soccer Central - Shared Script (script.js)
   ========================================================= */

// Feature 1: Theme Switcher (Night Pitch vs. Day Match)
function toggleTheme() {
    const bodyElement = document.body;
    bodyElement.classList.toggle('day-mode');
    
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        if (bodyElement.classList.contains('day-mode')) {
            themeBtn.textContent = '🌙 Switch to Night Match Mode';
        } else {
            themeBtn.textContent = '☀️ Switch to Day Match Mode';
        }
    }
}

// Feature 2: Interactive Goal Score Counter with Pop-Up Alert
let scoreCount = 0;

function scoreGoal() {
    scoreCount++;
    const scoreDisplay = document.getElementById('goal-counter');
    
    if (scoreDisplay) {
        scoreDisplay.textContent = scoreCount;
    }

    // Interactive Alert pop-up triggered on milestone scores
    if (scoreCount === 1) {
        alert("GOOOOOAL! You scored your first penalty kick!");
    } else if (scoreCount === 5) {
        alert("HAT-TRICK HERO! 5 Goals Scored on the Board!");
    } else if (scoreCount === 10) {
        alert("GOLDEN BOOT UNLOCKED! You scored 10 goals!");
    }
}

// Optional Feature: Quick Match Alert
function triggerMatchAlert() {
    alert("📢 TICKET ALERT: Next home fixture against FC City is 80% sold out!");
}
