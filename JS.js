const header = document.querySelector("header");
const links = document.querySelectorAll(".nav-link");
const toggle_btn = document.querySelector(".toggle-btn");

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