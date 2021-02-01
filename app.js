// mobile-menu script
let burgerBtn = document.querySelector(".burger");
console.log(burgerBtn);
let mobileMenuWindow = document.querySelector(".mobile-menu");

function showMobileMenu () {
    mobileMenuWindow.classList.toggle("mobile-menu-active");
    burgerBtn.classList.toggle("burger-active");
};

burgerBtn.addEventListener("click", showMobileMenu);



