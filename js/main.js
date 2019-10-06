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

	/* -- Bootstrap scrollspy -- */
	$('body').scrollspy();

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

	/* -- Inputs & Textbox Validation -- */
	$('.input').on('click', function() {
		const input = $(this);

		input.removeClass('invalid');
	});

	/* -- Contact form -- */
	$('.contact-form').on('submit ', function(e) {
		e.preventDefault();
		let isValidForm = true;

		$('.input').each(function() {
			const input = $(this);
			if (!input.val()) {
				isValidForm = false;
				input.addClass('invalid');
			}
		});

		if (isValidForm) {
			$.ajax({
				'url': 'https://elijah-sawyers-email-service.herokuapp.com/',
				'type': 'post',
				'data': $('.contact-form').serialize(),
				'success': function() {
					alert('Message sent!');
			}	,
				'error': function() {
					alert('Unable to send the message! Please try again later.');
				},
    	});
		}
	});
})(jQuery);
