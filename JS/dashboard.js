const isLoggedIn = localStorage.getItem("loggedIn") === "true";

if (!isLoggedIn) {
  window.location.href = "login.html";
}

// ==============================
// Fetch Data
// ==============================

const gamesPlayed = Number(localStorage.getItem("gamesPlayed")) || 0;
const bestScore = localStorage.getItem("bestScore") || "0/0";
const accuracy = Number(localStorage.getItem("accuracy")) || 0;
const totalXP = Number(localStorage.getItem("totalXP")) || 0;
const currentLevel = Number(localStorage.getItem("currentLevel")) || 1;
const username = localStorage.getItem("username") || "Player";

const lastCategory = localStorage.getItem("lastCategory") || "-";
const lastDifficulty = localStorage.getItem("lastDifficulty") || "-";
const lastScore = localStorage.getItem("lastScore") || "0/0";

// ==============================
// Update Dashboard
// ==============================

document.getElementById("games-played").textContent = gamesPlayed;
document.getElementById("best-score").textContent = bestScore;
document.getElementById("accuracy").textContent = `${accuracy}%`;
document.getElementById("total-xp").textContent = `${totalXP} XP`;

document.getElementById("username").textContent = username;
document.getElementById("level").textContent = `Level ${currentLevel}`;

document.getElementById("category").textContent = lastCategory;
document.getElementById("difficulty").textContent = lastDifficulty;
document.getElementById("score").textContent = lastScore;

// ==============================
// XP Progress Bar
// ==============================

const xpPerLevel = 500;

const currentXP = totalXP % xpPerLevel;
const progress = (currentXP / xpPerLevel) * 100;

document.getElementById("progress-fill").style.width = `${progress}%`;

document.getElementById("xp-text").textContent =
  `${currentXP} / ${xpPerLevel} XP`;

// ==============================
// Achievements
// ==============================

// First Quiz

if (gamesPlayed >= 1) {
  document.getElementById("first-win").classList.add("unlocked");
}

// 100 XP

if (totalXP >= 100) {
  document.getElementById("xp-achievement").classList.add("unlocked");
}

// Perfect Score

const best = Number(bestScore.split("/")[0]);
const total = Number(bestScore.split("/")[1]);

if (best === total && total > 0) {
  document.getElementById("perfect-score").classList.add("unlocked");
}
/* =========================================
   LOGOUT
========================================= */

const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("loggedIn");

    window.location.href = "../pages/login.html";
  });
}
