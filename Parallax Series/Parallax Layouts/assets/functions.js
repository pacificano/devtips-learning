$(window).scroll(function () {
	
	var wScroll = $(this).scrollTop();

	// console.log(wScroll);

	$('.logo').css({
		'transform' : 'translate(0px, ' + wScroll /2 + '%)'
	});

	$('.back-bird').css({
		'transform' : 'translate(0px, ' + wScroll /4 + '%)'
	});

	$('.fore-bird').css({
		'transform' : 'translate(0px, -' + wScroll /40 + '%)'
	});



	if (wScroll > $('.clothes-block').offset().top - ($(window).height() / 1.2)) {

		$('.img-row .figure').each(function (i) {
			// for each of these things selected
			
			setTimeout(function () {
				
				$('.img-row .figure').eq(i).addClass('is-showing');
				// eq = select the item from the index(i)

			}, 150 * (i+1)); // setTimeout
			
		}); // .each function

	} // fade in for the individual images



	if (wScroll > $('.large-window').offset().top - $(window).height()) {

		$('.large-window').css({'background-position':'center ' + (wScroll - $('.large-window').offset().top) + 'px'});

		var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

		$('.window-tint').css({'opacity': opacity});
	} // fade in the price, son



	if (wScroll > $('.blog-posts-row').offset().top - $(window).height()) {
		// if the distance scrolled from the top
		// is more than the distance from the top of the top of .blog-posts-row
		// minus the height of the window (so you get it when the div is coming up from the bottom of the window)

		var offset = Math.min(0, wScroll - $('.blog-posts-row').offset().top + $(window).height() - 350);
			// until the top of the window hits the top of the div, the value will be a negative number

		// console.log("wScroll: " + wScroll + " offset: " + $('.blog-posts-row').offset().top +  "windowHeight " + $(window).height() + " varOffset=" + offset);

		$('.post-1').css({'transform': 'translate(' + offset + 'px, 0px'});

		$('.post-3').css({'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.5) + 'px'});
	}

});