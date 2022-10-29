

$(window).ready(() => {
    $("#loading").fadeOut(1400)
    $("body").css("overflow", "auto")
})
// let navBarShow = $("#navBar").offset().top;
$(window).scroll(() => {

    let windowScroll = $(window).scrollTop()
    // if (windowScroll > navBarShow) {
    //     $("#navBar").attr("id", "navBarScroll")
    // } else {
    //     $("#navBarScroll").attr("id", "navBar")
    // }

    // scroll to top button
    if (windowScroll > $("header").offset().top + 500) {
        $('#scrollTopBtn').fadeIn(500);
        $('#scrollTopBtn').css("display", "flex")
    } else {
        $('#scrollTopBtn').fadeOut(500);
    }
})
//scorll to top btn
$("#scrollTopBtn").click(() => {
    $("html,body").animate({ scrollTop: 0 }, 2)
})



//  close btn for nav
let toggleMenu = document.getElementById("toggleMenu");
let LinksList = document.getElementById("LinksList");






// this for togle btoom  sidbar links in responsive
toggleMenu.addEventListener("click",() => {

   toggleMenu.classList.toggle("open")
   LinksList.classList.toggle("open")
 
})


// about page owl carousel



$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 20,
      

    responsive:{
        0:{
            items:1,
            dots:true,
            loop:true
        },
        600:{
            items:2,
            dots:true,
            loop:true
        },
        1000:{
            items:4,
            dots:true,
            loop:true
        }
       
    }
    });
  });

  AOS.init();
// //   about page conter 
// window.onscroll=function () {
    

//   if (window.scrollY >= conterSection.offsetTop-100) {
//     counters.forEach( counter => {
//         const animate = () => {
//            const value = +counter.getAttribute('akhi');
//            const data = +counter.innerText;
          
//            const time = value / speed;
//           if(data < value) {
//                counter.innerText = Math.ceil(data + time);
//                setTimeout(animate, 1);
//              }else{
//                counter.innerText = value;
//              }
          
//         }
        
//         animate();
//      });}
  
// }