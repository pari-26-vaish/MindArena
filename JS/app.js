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


let categ = document.querySelector(".categories");
let btnsecondary = document.getElementById("btn-secondary");

if (btnsecondary && categ) {
    btnsecondary.addEventListener("click", function(){
        categ.scrollIntoView({
            behavior: "smooth"
        });
    });
}