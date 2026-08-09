// ==============================
// Reveal Animation
// ==============================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

reveals.forEach((el) => observer.observe(el));

// ==============================
// Redirect if opened directly
// ==============================

if (!localStorage.getItem("quizScore")) {
  window.location.href = "../index.html";
}

// ==============================
// Fetch Quiz Data
// ==============================

const score = Number(localStorage.getItem("quizScore"));
const total = Number(localStorage.getItem("totalQuestions"));

const settings = JSON.parse(localStorage.getItem("quizSettings"));

const accuracy = Math.round((score / total) * 100);
const earnedXP = score * 20;

// ==============================
// Games Played
// ==============================

let gamesPlayed = Number(localStorage.getItem("gamesPlayed")) || 0;
gamesPlayed++;

localStorage.setItem("gamesPlayed", gamesPlayed);

// ==============================
// Total XP
// ==============================

let totalXP = Number(localStorage.getItem("totalXP")) || 0;
totalXP += earnedXP;

localStorage.setItem("totalXP", totalXP);

// ==============================
// Current Level
// ==============================

const currentLevel = Math.floor(totalXP / 500) + 1;

localStorage.setItem("currentLevel", currentLevel);

// ==============================
// Best Score
// ==============================

let bestScore = localStorage.getItem("bestScore") || "0/0";

const bestScoreValue = Number(bestScore.split("/")[0]);

if (score > bestScoreValue) {
  bestScore = `${score}/${total}`;
  localStorage.setItem("bestScore", bestScore);
}

// ==============================
// Accuracy
// ==============================

localStorage.setItem("accuracy", accuracy);

// ==============================
// Recent Quiz
// ==============================

localStorage.setItem("lastCategory", settings.category);
localStorage.setItem("lastDifficulty", settings.difficulty);
localStorage.setItem("lastQuestions", settings.questions);
localStorage.setItem("lastScore", `${score}/${total}`);

// ==============================
// Username (Temporary)
// ==============================

if (!localStorage.getItem("username")) {
  localStorage.setItem("username", "Player");
}

// ==============================
// Result Page UI
// ==============================

document.getElementById("score").textContent = `${score} / ${total}`;
document.getElementById("accuracy").textContent = `${accuracy}%`;
document.getElementById("xp").textContent = `+${earnedXP}`;

const message = document.getElementById("result-msg");

if (accuracy >= 90) {
  message.textContent = "🏆 Outstanding! You're a Quiz Master.";
  document.querySelector(".score-circle h2").style.color = "#22c55e";
} else if (accuracy >= 70) {
  message.textContent = "🔥 Great job! Keep it up.";
  document.querySelector(".score-circle h2").style.color = "#3b82f6";
} else if (accuracy >= 50) {
  message.textContent = "👍 Nice attempt! Practice makes perfect.";
  document.querySelector(".score-circle h2").style.color = "#ffc857";
} else {
  message.textContent = "💪 Don't give up. Try again!";
  document.querySelector(".score-circle h2").style.color = "#ffc857";
}

const username = localStorage.getItem("username") || "Player";

const leaderboardEntry = {
  name: username,
  category: settings.category,
  score: score,
  date: new Date().toISOString,
};

const existingScores =
  JSON.parse(localStorage.getItem("mindarena_scores")) || [];

existingScores.push(leaderboardEntry);

localStorage.setItem("mindarena_scores", JSON.stringify(existingScores));
