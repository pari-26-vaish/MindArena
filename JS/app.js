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

let categ = document.querySelector(".categories");
let btnsecondary = document.getElementById("btn-secondary");

if (btnsecondary && categ) {
  btnsecondary.addEventListener("click", function () {
    categ.scrollIntoView({
      behavior: "smooth",
    });
  });
}

//Theme switch

const themeToggle = document.getElementById("theme-btn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

const startNowBtn = document.getElementById("start-now-btn");

if (startNowBtn) {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
    startNowBtn.href = "pages/dashboard.html";
  } else {
    startNowBtn.href = "pages/login.html";
  }
}
