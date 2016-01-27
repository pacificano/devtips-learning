$(window).scroll(function () {
	
	var wScroll = $(this).scrollTop();

	console.log(wScroll);

	$('.logo').css({
		'transform' : 'translate(0px, ' + wScroll /2 + '%)'
	});

	$('.back-bird').css({
		'transform' : 'translate(0px, ' + wScroll /4 + '%)'
	});

	$('.fore-bird').css({
		'transform' : 'translate(0px, -' + wScroll /40 + '%)'
	});

});