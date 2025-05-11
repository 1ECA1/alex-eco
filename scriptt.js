// const bar = document.getElementById(`bar`);
// const close = document.getElementById('close');
// const nav = document.getElementById(navbar);

// if (bar) {
//     bar.addEventListener(`click`, () =>{
//         nav.classList.add('active');

//     })
// }

// if (close) {
//     close.addEventListener(`click`, () =>{
//         nav.classList.add('remove');
        
//     })
// }

const navbar = document.getElementById("navbar");
const menuIcon = document.getElementById("mobile-menu"); // Make sure you have an icon/button with this ID
const closeIcon = document.getElementById("close");

menuIcon.addEventListener("click", () => {
    navbar.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    navbar.classList.remove("active");
});
