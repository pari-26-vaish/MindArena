// REVEAL ANIMATION CODE

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });
}, {
    threshold: 0.2
});
reveals.forEach((el) => observer.observe(el));

// CATEGORIES PAGE CODE

// ============QUIZ CONFIG============
// let time = 30;

// const timeValue = document.getElementById("time-value");

// document.getElementById("plus").addEventListener("click", () => {

//     if(time < 120){
//         time += 10;
//         timeValue.textContent = time;
//     }

// });

// document.getElementById("minus").addEventListener("click", () => {

//     if(time > 10){
//         time -= 10;
//         timeValue.textContent = time;
//     }

// });

// SELECT CATEGORY

const categoryButtons = document.querySelectorAll(".categorybtn");

const selectedCategory = document.querySelector(".selected-category");
const previewCategory = document.getElementById("preview-category");

categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active from every button
        categoryButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        // Update selected category
        const category = button.textContent.trim();

        selectedCategory.innerHTML = category;
        previewCategory.textContent = category.replace(/^[^\w]+\s*/, "");

    });

});
// DIFFICULTY

const difficultyRadios =
document.querySelectorAll("input[name='difficulty']");

const previewDifficulty =
document.getElementById("preview-difficulty");

difficultyRadios.forEach(radio=>{

    radio.addEventListener("change",()=>{

        previewDifficulty.textContent =
        radio.value.charAt(0).toUpperCase() +
        radio.value.slice(1);

    });

});

// QUESTIONS

const questionRadios =
document.querySelectorAll("input[name='questions']");

const previewQuestions =
document.getElementById("preview-questions");

questionRadios.forEach(radio=>{

    radio.addEventListener("change",()=>{

        previewQuestions.textContent =
        radio.id.replace("q","");

    });

});

// TIME

let time = 30;

const timeValue =
document.getElementById("time-value");

const previewTime =
document.getElementById("preview-time");

const minus =
document.getElementById("minus");

const plus =
document.getElementById("plus");

plus.addEventListener("click",()=>{

    if(time<120){

        time+=10;

        timeValue.textContent=time;

        previewTime.textContent=time+" sec";

    }

});

minus.addEventListener("click",()=>{

    if(time>10){

        time-=10;

        timeValue.textContent=time;

        previewTime.textContent=time+" sec";

    }

});

// START
document.querySelector(".start-btn")
.addEventListener("click",()=>{

const quizSettings={

category:
previewCategory.textContent,

difficulty:
previewDifficulty.textContent,

questions:
previewQuestions.textContent,

time

};

localStorage.setItem(
"quizSettings",
JSON.stringify(quizSettings)
);

});
