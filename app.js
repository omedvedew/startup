// mobile-menu script
let burgerBtn = document.querySelector(".burger");
console.log(burgerBtn);
let mobileMenuWindow = document.querySelector(".mobile-menu");

function showMobileMenu () {
    mobileMenuWindow.classList.toggle("mobile-menu-active");
    burgerBtn.classList.toggle("burger-active");
};

burgerBtn.addEventListener("click", showMobileMenu);

// SLIDER-SCRIPT
$(document).ready(function(){
    $('.about-us-slider-container').slick({
    //   setting-name: setting-value
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 765,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
    });
  });

// QUOTATIONS SLIDER SCRIPT
$(document).ready(function(){
  $('.clients-quotations-slider').slick({
  //   setting-name: setting-value
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnDotsHover: true
  });
});





