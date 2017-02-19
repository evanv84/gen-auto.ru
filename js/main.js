$(document).ready(function() {

	// Nav toggle
	$('.nav-collapse').on('click', function(){
		$('nav ul').toggleClass('showing');
		$('#nav-icon').toggleClass('open');
	});
	
	$(".offer-carousel").owlCarousel({
 
	      loop:true,
	      margin:0,
	      nav:false,
	      dots: true,
	      autoplay:true,
	      autoplayTimeout:5000,
	      autoplayHoverPause:true,
	      autoplaySpeed: 2000,
		  items:1,
	  });

	$(".clients-carousel").owlCarousel({
 
	      loop:true,
	      margin:35,
	      nav:false,
	      dots: false,
	      stagePadding: 0,
	      autoplay:true,
	      autoplayTimeout:2500,
	      autoplayHoverPause:true,
	      autoplaySpeed: 1000,
	      responsive:{
	          0:{
	              items:2
	          },
	          600:{
	              items:3
	          },
	          1000:{
	              items:4
	          }
	      }
	 
	  });
	

});