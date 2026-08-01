// Adjust STORAGE_KEY if quiz.js saves under a different key
const STORAGE_KEY = "mindarena_scores";

function getScores() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function populateCategories(scores) {
  const select = document.getElementById("categoryFilter");
  const categories = [...new Set(scores.map(s => s.category).filter(Boolean))];
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}

function renderPodium(top3) {
  const podium = document.getElementById("podium");
  podium.innerHTML = "";
  const medals = ["🥇", "🥈", "🥉"];
  const classes = ["gold", "silver", "bronze"];
  top3.forEach((entry, i) => {
    const div = document.createElement("div");
    div.className = `podium-item ${classes[i]}`;
    div.innerHTML = `
      <div class="rank-medal">${medals[i]}</div>
      <div class="p-name">${entry.name}</div>
      <div class="p-score">${entry.score} pts</div>
    `;
    podium.appendChild(div);
  });
}

function renderTable(scores) {
  const tbody = document.getElementById("lbTableBody");
  const emptyState = document.getElementById("emptyState");
  tbody.innerHTML = "";

  if (scores.length === 0) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  scores.forEach((entry, index) => {
    const tr = document.createElement("tr");
    if (index < 3) tr.classList.add("top-row");
    tr.innerHTML = `
      <td>#${index + 1}</td>
      <td>${entry.name}</td>
      <td>${entry.category || "General"}</td>
      <td>${entry.score}</td>
      <td>${entry.date ? new Date(entry.date).toLocaleDateString() : "-"}</td>
    `;
    tbody.appendChild(tr);
  });
}

function loadLeaderboard(filterCategory = "all") {
  let scores = getScores();

  if (filterCategory !== "all") {
    scores = scores.filter(s => s.category === filterCategory);
  }

  scores.sort((a, b) => b.score - a.score);

  renderPodium(scores.slice(0, 3));
  renderTable(scores);
}

document.addEventListener("DOMContentLoaded", () => {
  const scores = getScores();
  populateCategories(scores);
  loadLeaderboard();

  document.getElementById("categoryFilter").addEventListener("change", (e) => {
    loadLeaderboard(e.target.value);
  });

  document.getElementById("clearScores").addEventListener("click", () => {
    if (confirm("Clear all saved scores?")) {
      localStorage.removeItem(STORAGE_KEY);
      loadLeaderboard();
    }
  });
});