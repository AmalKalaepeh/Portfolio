const header = document.querySelector("header");
/* ----------------------Sticky NAvbar -----------------------*/

function stickyNavbar(){
header.classList.toggle("scrolled", window.pageYOffset > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);
