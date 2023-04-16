$(function () {

	$('.menu-opener').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.navbar').toggleClass('active');
	});

	$('#white-mode-btn, #dark-mode-btn').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('black-mode');
	});
	

	// home Top slider
	var swiper = new Swiper(".homeTopSlide", {
		slidesPerView: 4.5,
		spaceBetween: 30,
		grabCursor: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.5,
			},
			476: {
				slidesPerView: 2,
			},
			700: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1220: {
				slidesPerView: 4.5,
			},
			1920: {
				slidesPerView: 4.5,
			},
		},
		loop: true,
	});

	var swiper3 = new Swiper(".quality-slide-in", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: ".swiper-button-next2",
			prevEl: ".swiper-button-prev2",
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			1024: {
				slidesPerView: 1,
			},
		},
	});

	// concert sec
	try {
		$('.more-text').slideUp(0);
		$('.show-text').each(item => {
			const card = $('.show-text')[item];
			$(card).find('.more-text__btn').click(function () {
				$(card).find('.more-text').slideToggle(400);
				$(card).find('.dots').toggleClass('d-none');

				if ($(this).text() == "Читать далее") {
					$(this).text("Читать меньше");
				}
				else {
					$(this).text("Читать далее");
				}
			})
		})

		$('.reviews-card__box').slideUp(0);
		$(".show-more__card").click(function () {
			$('.reviews-card__box').slideToggle(400);
			if ($(this).text() == "СКРЫВАТЬ") {
				$(this).text("ПОКАЗАТЬ ЕЩЕ");
			} else {
				$(this).text("СКРЫВАТЬ");
			}
		})


		var concertSwiper = new Swiper(".concert-swiper", {
			slidesPerView: 2.4,
			grabCursor: true,
			spaceBetween: 30,
			clickable: true,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1.2,
					spaceBetween: 15,
				},
				430: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				640: {
					slidesPerView: 2.2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2.4,
					spaceBetween: 30,
				},
			},
		});


		// concertVenuesSlider 
		var swiper = new Swiper(".concertVenuesSlider", {
			slidesPerView: 1.2,
			spaceBetween: 30,
			loop: true,
			speed: 500,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1.1,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 1.2
				},
			},
		});
	} catch (error) {
		console.log(erorr);
	}

	var concertSwiper2 = new Swiper(".our-comman-swiper ", {
		slidesPerView: 3.25,
		speed: 500,
		spaceBetween: 30,
		clickable: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next2",
			prevEl: ".swiper-button-prev2",
		},
		breakpoints: {
			360: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			430: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3.25,
				spaceBetween: 30,
			},
		},
	});

	var concertSwiper3 = new Swiper(".site-events-swiper ", {
		slidesPerView: 1.3,
		grabCursor: true,
		spaceBetween: 30,
		clickable: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next3",
			prevEl: ".swiper-button-prev3",
		},
		breakpoints: {
			360: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			430: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 1.3,
				spaceBetween: 30,
			},
		},
	});
	var concertSwiper4 = new Swiper(".concert-ads-swiper ", {
		slidesPerView: 1.3,
		grabCursor: true,
		spaceBetween: 30,
		clickable: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next4",
			prevEl: ".swiper-button-prev4",
		},
		breakpoints: {
			360: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			430: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 1.3,
				spaceBetween: 30,
			},
		},
	});
	var concertSwiper5 = new Swiper(".story-ads-swiper ", {
		slidesPerView: 1.3,
		grabCursor: true,
		spaceBetween: 30,
		clickable: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next5",
			prevEl: ".swiper-button-prev5",
		},
		breakpoints: {
			360: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			430: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 1.3,
				spaceBetween: 30,
			},
		},
	});
});