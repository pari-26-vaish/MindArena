let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// REVEAL ANIMATION CODE

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

// FETCH SAVED ITEMS
const settings = JSON.parse(localStorage.getItem("quizSettings"));
let timer;
let timeLeft = settings.time;
console.log(settings);
// Quiz Logic and API
const categoryMap = {
  Programming: 18,
  Science: 17,
  Geography: 22,
  History: 23,
  Sports: 21,
  Movies: 11,
};

const categoryID = categoryMap[settings.category];
const url = `https://opentdb.com/api.php?amount=${settings.questions}&category=${categoryID}&difficulty=${settings.difficulty.toLowerCase()}&type=multiple`;
console.log(url);

//Load Quiz Function
async function loadQuiz() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  questions = data.results;

  showQuestion();
  const nextBtn = document.getElementById("next-btn");

  nextBtn.addEventListener("click", nextQuestion);
}

loadQuiz();

// Show Question Function

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  const questionText = document.getElementById("question-text");

  questionText.innerHTML = currentQuestion.question;
  document.getElementById("question-number").textContent =
    currentQuestionIndex + 1;
  showAnswers(currentQuestion);
  startTimer();
  const nextBtn = document.getElementById("next-btn");

  nextBtn.addEventListener("click", nextQuestion);
}

// Show Answers Function
function showAnswers(currentQuestion) {
  const answers = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ];

  answers.sort(() => Math.random() - 0.5);

  const answersDiv = document.getElementById("answers");

  answersDiv.innerHTML = "";

  answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.innerHTML = answer;

    button.dataset.answer = answer;

    button.classList.add("answer-btn");
    button.style.animationDelay = `${index * 80}ms`;
    button.addEventListener("click", () => {
      selectAnswer(button, answer, currentQuestion);
    });

    answersDiv.appendChild(button);
  });
  const nextBtn = document.getElementById("next-btn");

  nextBtn.addEventListener("click", nextQuestion);
}

// Select Answer Function

function selectAnswer(button, answer, currentQuestion) {
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn) => {
    btn.disabled = true;

    if (btn.dataset.answer === currentQuestion.correct_answer) {
      btn.classList.add("correct");
    }
  });

  if (answer === currentQuestion.correct_answer) {
    button.classList.add("correct");

    score++;
  } else {
    button.classList.add("wrong");
  }

  console.log(score);
  clearInterval(timer);
  const nextBtn = document.getElementById("next-btn");

  nextBtn.addEventListener("click", nextQuestion);
}

// Next Question Function

function nextQuestion() {
  console.log("NEXT QUESTION CALLED");
  const quizContent = document.getElementById("quiz-content");
  const nextBtn = document.getElementById("next-btn");

  quizContent.classList.add("fade-out");

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      showQuestion();

      nextBtn.style.display = "none";

      quizContent.classList.remove("fade-out");
    } else {
      localStorage.setItem("quizScore", score);
      localStorage.setItem("totalQuestions", questions.length);

      window.location.href = "../pages/result.html";
    }
  }, 350);
}

nextQuestion();
function revealCorrectAnswer() {
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn) => {
    btn.disabled = true;

    if (btn.dataset.answer === questions[currentQuestionIndex].correct_answer) {
      btn.classList.add("correct");
    }
  });
}
function startTimer() {
  clearInterval(timer);
  timeLeft = settings.time;
  document.getElementById("quiz-timer").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;

    document.getElementById("quiz-timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      revealCorrectAnswer();
      setTimeout(nextQuestion, 1000);
    }
  }, 1000);
}
