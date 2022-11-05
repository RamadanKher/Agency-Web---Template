
// service.html counter
var a = 0;
$(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});
// service.html counter end 

// loding screen 
$(window).ready(() => {
    $("#loading").fadeOut(1400)
    $("body").css("overflow", "auto")
})
// loding screen  end 


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

