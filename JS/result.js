// Navbar

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

//Result page code
let gamesPlayed = Number(localStorage.getItem("gamesPlayed")) || 0;

gamesPlayed++;

localStorage.setItem("gamesPlayed", gamesPlayed);
if (!localStorage.getItem("quizScore")) {
  window.location.href = "../index.html";
}

const score = Number(localStorage.getItem("quizScore"));
const total = Number(localStorage.getItem("totalQuestions"));

const accuracy = Math.round((score / total) * 100);
const xp = score * 20;
localStorage.setItem("xp", xp);
document.getElementById("score").textContent = `${score} / ${total}`;

document.getElementById("accuracy").textContent = `${accuracy}%`;

document.getElementById("xp").textContent = `+${xp}`;

const message = document.getElementById("result-msg");

if (accuracy >= 90) {
  message.textContent = "🏆 Outstanding! You're a Quiz Master.";
} else if (accuracy >= 70) {
  message.textContent = "🔥 Great job! Keep it up.";
} else if (accuracy >= 50) {
  message.textContent = "👍 Nice attempt! Practice makes perfect.";
} else {
  message.textContent = "💪 Don't give up. Try again!";
}
