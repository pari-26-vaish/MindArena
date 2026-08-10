/* =========================================
   MINDARENA — LOGIN
   V1 LOCAL STORAGE AUTH
========================================= */

const loginForm = document.getElementById("login-form");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const loginError = document.getElementById("login-error");

/* =========================================
   LOGIN
========================================= */

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  loginError.textContent = "";

  /* =========================================
     GET SAVED ACCOUNT
  ========================================= */

  let savedUser = null;

  try {
    savedUser = JSON.parse(localStorage.getItem("mindarenaUser"));
  } catch (error) {
    savedUser = null;
  }

  /* =========================================
     CHECK ACCOUNT
  ========================================= */

  if (!savedUser) {
    loginError.textContent = "No account found. Please sign up first.";

    return;
  }

  /* =========================================
     CHECK CREDENTIALS
  ========================================= */

  if (username !== savedUser.username || password !== savedUser.password) {
    loginError.textContent = "Incorrect username or password.";

    return;
  }

  /* =========================================
     LOGIN SUCCESS
  ========================================= */

  localStorage.setItem("username", savedUser.username);

  localStorage.setItem("loggedIn", "true");

  /* =========================================
     DASHBOARD
  ========================================= */

  window.location.href = "dashboard.html";
});
