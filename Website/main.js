/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// JavaScript Code
	const counter = document.querySelector(".counter-number");
	async function updateCounter() {
		let response = await fetch("https://cuvnfuvvltiv754whz4auucefq0ldbyp.lambda-url.ap-south-1.on.aws/")
		let data = await response.json();
		counter.innerHTHL = ` Views: ${data}`;
	}	
	updateCounter();

})(jQuery);

