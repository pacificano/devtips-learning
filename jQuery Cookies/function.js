$(function () {

	// visit home

	if ( $('body').hasClass('home') && !Cookies.get('seen') ) {

		Cookies.set('seen', 'step1', { expires: 120, path: '/'});
		console.log(Cookies.get('seen'));
	}



	// visit signup page

	if ( Cookies.get('seen') === "step1" && !$('body').hasClass('home') ) {

		Cookies.set('seen', 'step2', { expires: 120, path: '/'});
		console.log(Cookies.get('seen'));

	}
	


	// visit home again
	// show modal

	if ( Cookies.get('seen') === "step2" && $('body').hasClass('home') ) {

		alert("you should sign up!");

		// completed
		Cookies.set('seen', 'complete', { expires: 120, path: '/'});

	}


});