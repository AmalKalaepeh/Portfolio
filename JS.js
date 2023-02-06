const header = document.querySelector("header");
const links = document.querySelectorAll(".nav-link");
const toggle_btn = document.querySelector(".toggle-btn");
const first_skill =document.querySelector(".skill:first-child");
const sk_counter = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", ()=> {
    skillsCounter();

});
    window.addEventListener("scroll", ()=> {
    activeLink();
});
/* ----------------------Sticky NAvbar -----------------------*/
function stickyNavbar(){
header.classList.toggle("scrolled", window.pageYOffset > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);


/* ----------------------Reveal Animation -----------------------*/

let sr = ScrollReveal({
    duration:2500,
    distance:"60px",
});
sr.reveal(".showcase-info", {delay:600});
sr.reveal(".showcase-image", {origin:"top", delay:700});


/* ----------------------change Active Links on scroll -----------------------*/

function activeLink(){
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections)
    .map((sct, i) => {
        return{ 
         y: sct.getBoundingClientRect().top - header.offsetHeight,
         id: i,
        };
    }).filter((sct) => sct.y <= 0);

    let currSectionID = passedSections.at(-1).id;
    
    links.forEach(l => l.classList.remove("active"));
    links [currSectionID].classList.add("active");
}
activeLink();
/* ----------------------change page theme -----------------------*/

let firstTheme = localStorage.getItem("dark");

changeTheme(+firstTheme);



function changeTheme(isDark){
    if(isDark){
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("dark", 1);
    }
    else{
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);
    }
}

toggle_btn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
});

/* ----------------------skills Progress Bar Animation -----------------------*/




function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;

if(window.innerHeight >= topPosition + el.offsetHeight)
    return true;
    return false;
}

function updateCount(num, maxNum){
    let currentNum = +num.innerText

    if(currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}


function skillsCounter() {
    if(!hasReached(first_skill)) return;


    sk_counter.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    });

    progress_bars.forEach(
        (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    );
};