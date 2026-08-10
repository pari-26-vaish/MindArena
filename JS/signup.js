/* =========================================
   MINDARENA — SIGNUP
   V1 LOCAL STORAGE AUTH
========================================= */

const signupForm = document.getElementById("signup-form");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const signupError = document.getElementById("signup-error");

/* =========================================
   SIGNUP
========================================= */

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  signupError.textContent = "";

  /* =========================================
     VALIDATION
  ========================================= */

  if (!username || !email || !password || !confirmPassword) {
    signupError.textContent = "Please fill in all fields.";
    return;
  }

  if (username.length < 3) {
    signupError.textContent = "Username must be at least 3 characters.";

    return;
  }

  if (password.length < 6) {
    signupError.textContent = "Password must be at least 6 characters.";

    return;
  }

  if (password !== confirmPassword) {
    signupError.textContent = "Passwords do not match.";

    return;
  }

  /* =========================================
     CHECK EXISTING ACCOUNT
  ========================================= */

  const existingUser = JSON.parse(localStorage.getItem("mindarenaUser"));

  if (existingUser) {
    signupError.textContent = "An account already exists. Please login.";

    return;
  }

  /* =========================================
     CREATE USER
  ========================================= */

  const user = {
    username: username,
    email: email,
    password: password,
  };

  localStorage.setItem("mindarenaUser", JSON.stringify(user));

  /* =========================================
     DEFAULT USER DATA
  ========================================= */

  localStorage.setItem("username", username);
  localStorage.setItem("loggedIn", "true");

  localStorage.setItem("gamesPlayed", "0");
  localStorage.setItem("bestScore", "0");
  localStorage.setItem("accuracy", "0");
  localStorage.setItem("totalXP", "0");
  localStorage.setItem("currentLevel", "1");

  /* =========================================
     REDIRECT
  ========================================= */

  window.location.href = "dashboard.html";
});
