
$(document).ready(function () {
//typed js 
var typed = new Typed(".typeMe", {
   strings: ["John Doe", "a Developer","a Designer","a Businessman"],
   smartBackspace: true,
   typeSpeed: 100,
   backSpeed: 100,
   loop: true,
   loopCount: Infinity,
   startDelay: 1000
});


//loading
window.addEventListener('load' , function(){
   $(".loading").fadeOut(1000 , _ => {
      $("body").css("overflowY" ,"visible")
      $(".navbar").css("display" ,"block")
      $(".header-content").slideDown(700);
   })
})


//change navbar color
$(window).scroll( _ => {
   let aboutOffset = $("#about").offset().top
   let windowScrollTop = $(window).scrollTop()
   let heightOfNav =$(".navbar").outerHeight()
   // console.log(heightOfNav);


   if ( aboutOffset  <  windowScrollTop + heightOfNav) {
   // console.log(windowScrollTop);

   $(".navbar").addClass("bg-white")
   $(".navbar-brand").css("color" , "#000")
   $(".navbar .nav-item a").css("color" , "#000")
   $(".navbar-toggler i").css("color" , "#000")

   }
else{
   $(".navbar").removeClass("bg-white")
   $(".navbar-brand").css("color" , "#fff")
   $(".navbar .nav-item a").css("color" , "#fff")
   $(".navbar-toggler i").css("color" , "#fff")

}
})

//about section
new WOW().init();



//skills section 
$(window).scroll(_ => {
   let skillsOffset = $("#about").offset().top
   let windowScrollTop =$(window).scrollTop()
   let outerHeightSkill=$(".skill").outerHeight()
// console.log(outerHeightSkill);
   if (skillsOffset < windowScrollTop - outerHeightSkill ) {
      $(".progress-bar").eq(0).css("width" ,"100%")
      $(".progress-bar").eq(1).css("width" ,"95%")
      $(".progress-bar").eq(2).css("width" ,"90%")
      $(".progress-bar").eq(3).css("width" ,"85%")
      $(".progress-bar").eq(4).css("width" ,"75%")
   }
})



//slider section
$('.owl-carousel').owlCarousel({
   loop:true,
   // margin:10,   // since one item ou can remove it
   nav:false,
   // dots:true,
   autoplay:true,
   autoplayTimeout:4000,
   items:1,
   // animateOut : "fadeOut",
   animateIn : "fadeInRight"
});

});


//client section
var filterizd = $('.filter-container').filterizr({
      animationDuration: .5,
   });
   