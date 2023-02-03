const hamburgerMenu = document.querySelectorAll('.menuButton')[0];
const nav = document.querySelectorAll('.nav');

hamburgerMenu.addEventListener("click", () => {
    

    nav.forEach(e => {
        e.classList.toggle('disabled');
    })

    console.log(nav)
    console.log("clicked")
});
