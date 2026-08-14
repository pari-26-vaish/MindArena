# MindArena

MindArena is a web-based quiz platform built for **V1** with a focus on interactive quizzes, category-based gameplay, user authentication, leaderboards, and a responsive interface.

## ✨ Features

* 🔐 User Signup & Login
* 🚪 Logout functionality
* 🧠 Quiz gameplay
* 📚 Multiple quiz categories

  * Programming
  * Science
  * Geography
  * History
  * Sports
  * Movies
* 🎯 Difficulty selection
* ❓ Configurable number of questions
* ⏱️ Configurable quiz timer
* 🏆 Results and scoring
* 🥇 Leaderboard
* 👤 User dashboard
* 🌙 Dark mode
* ☀️ Light mode
* 📱 Responsive UI
* 💾 Local storage for V1 user/score data

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript
* LocalStorage
* OpenTDB API for quiz questions
* Google Fonts

## 📁 Project Structure

```text
MindArena/
│
├── CSS/
│   ├── style.css
│   ├── theme.css
│   ├── login.css
│   ├── signup.css
│   └── ...
│
├── JS/
│   ├── app.js
│   ├── categories.js
│   ├── quiz.js
│   ├── leaderboard.js
│   ├── login.js
│   ├── signup.js
│   └── ...
│
├── pages/
│   ├── categories.html
│   ├── quiz.html
│   ├── result.html
│   ├── leaderboard.html
│   ├── dashboard.html
│   ├── login.html
│   └── signup.html
│
├── index.html
└── README.md
```

## 🚀 Running the Project

Since MindArena is currently a frontend V1 application, no backend server is required.

1. Clone or download the repository.
2. Open the project in VS Code.
3. Use **Live Server** or another local web server.
4. Open `index.html`.
5. Start playing.

> Opening files directly with `file://` may cause issues with some browser features, so using Live Server is recommended.

## 🎮 V1 User Flow

```
Homepage
   ↓
Login / Signup
   ↓
Categories
   ↓
Quiz Configuration
   ↓
Quiz
   ↓
Results
   ↓
Leaderboard / Dashboard
```

## 💾 V1 Data Storage

MindArena V1 currently uses the browser's **LocalStorage** for client-side data such as authentication/session information and quiz scores.

This is suitable for the V1 prototype but **is not intended as production-grade authentication or persistent database storage**.

## 🌐 Quiz API

Quiz questions are retrieved from **Open Trivia Database (OpenTDB)**.

An active internet connection may therefore be required for quiz questions to load.

## 📌 V1 Status

**MindArena V1 — Complete ✅**

The current V1 includes the core user journey:

* Authentication
* Quiz configuration
* Quiz gameplay
* Results
* Leaderboard
* Dashboard
* Theme switching
* Responsive UI

Future versions can introduce a proper backend, database, secure authentication, persistent user accounts, and additional quiz functionality.

## 👥 Team

Built by -
Pari Vaish (https://github.com/pari-26-vaish)
Hemant Srivastava (https://github.com/hmntsriv)

### 🎯 V1 Goal

> **Learn. Play. Compete. — MindArena**
