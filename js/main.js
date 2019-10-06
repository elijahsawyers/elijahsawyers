/**
 * Author: Elijah Sawyers
 * Email: elijahsawyers@gmail.com
 */

'use strict';

(function($) {

	/* -- Fade-in website -- */
	$(window).on('load', function() {
		$('body').addClass('fade-in');
	});

	/* -- Smooth scroll on nav click -- */
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	/* -- Mobile dropdown -- */
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	/* -- Fixed nav -- */
	$(window).on('scroll', function() {
		const scrollY = $(this).scrollTop();
	
		scrollY > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
	});

	/* -- Owl Carousel -- */
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

})(jQuery);
