// const cl = console.log;

// let togglebutn = document.getElementById(`togglebutn`);
let testimonailslider = document.getElementById(`testimonailslider`);
// const onclickToggle = ele => {
//   cl(ele.target)
//   ele.target.classList.toggle(`fa-xmark`)
//   ele.target.classList.toggle(`fa-bars`)
// }

// togglebutn.addEventListener(`click`,onclickToggle)

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [`<i class="fa-solid fa-angle-left fa-2x"></i>`,`<i class="fa-solid fa-angle-right fa-2x"></i>`],
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})