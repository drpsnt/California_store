$(document).ready(function (){
    $('.header_burger').click(function (event){
        $('.header_menu,.header_burger').toggleClass('burger_active');
        $('body').toggleClass('no-scroll');
    })
});

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

const iconUpDown =  document.querySelectorAll(".icon");
iconUpDown.forEach(icon => {
    icon.addEventListener("click", e => {
        icon.classList.toggle("icon-rotate")
        icon.parentElement.classList.toggle("open");
    })
})
