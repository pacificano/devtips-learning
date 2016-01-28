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

	} // if

});