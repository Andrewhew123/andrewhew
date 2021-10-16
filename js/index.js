$(document).ready(function(){


	/*-------------------- Display item when scrolling down --------------------*/

	$(window).on("scroll", function() {
	    if($(window).scrollTop() > 350) {
	        $(".card-project").addClass("active");
	    } 
	});


	$(window).on("scroll", function() {
	    if($(window).scrollTop() > 350) {
	        $(".col-portfolio-image").addClass("active");
	    } 
	});


	/*-------------------- Click to display --------------------*/
	jQuery.fx.off = true;

	$("#btn-hamburger").on('click', function(){
		$(".mobile-nav").toggle("#display-mobile-nav");
		$(".overlay").toggle("#display-overlay");

	});

	$(".mobile-nav .mobile-nav-item").on('click', function(){
		$(".mobile-nav").hide("#nodisplay-mobile-nav");
		$(".overlay").hide("#nodisplay-overlay");

	});


	$(".overlay").on('click', function(){
		$(".mobile-nav").hide("#nodisplay-mobile-nav");
		$(".overlay").hide("#nodisplay-overlay");

	});


});



