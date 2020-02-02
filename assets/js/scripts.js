// Change menu color
$(".navbar-toggler").click(function(){
    $("nav").addClass('bg-dark');
    $("nav").addClass('shadow');
}); 

// Collapse menu icon on link touch
//$('.navbar-collapse a').click(function(){
//    $(".navbar-collapse").collapse('hide');
//}); 

// On scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        $("nav").addClass('bg-dark');
        $("nav").addClass('shadow');
        $("nav").removeClass('py-4');
    } else {
        if ($(".navbar-toggler").is(":visible") == false) {
            $("nav").removeClass('bg-dark');
            $("nav").removeClass('shadow');
            $("nav").addClass('py-4');
        } else if ($("#navbarNav").is(":visible") == false) {
            $("nav").removeClass('bg-dark');
            $("nav").removeClass('shadow');
            $("nav").addClass('py-4');
        }
    }   
}

// Get current year
$("#date").text( (new Date).getFullYear() );

// Toggle tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
