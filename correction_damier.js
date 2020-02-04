/**
 * 04/02/2020
 *
 * Correction du damier 
 *
 */


(function() {
	'use strict' ;
	$(document).ready(function() {
		let css_black =  {
			'display'	   : 'inline-block',
			'background-color' : 'black',
			'color'		   : 'white',
			'min-width'        : '70px',
			'min-height' 	   : '70px'
		};
		let css_white = {
			'display'	   : 'inline-block',
			'background-color' : 'white',
			'color'		   : 'black',
			'min-width'        : '70px',
			'min-height' 	   : '70px'
		}; 

		let new_css = {
			'display'	   : 'inline-block',
			'background-color' : 'green',
			'color'		   : 'black',
			'min-width'        : '70px',
			'max-width' 	   : '70px'
		};

		let over = function() {
			$(this).css(new_css)
		};

		let leave = function() {
			$(this).css($(this).data('css_case'))
		};


		for(let y=0;y<8;y++) {
			let ligne = $('<div></div>');
			$('#damier').append(ligne);
			for(let x=0; x<8;x++) {
				ligne.append(
					$('<div></div>')
					.css((x+y) % 2 ? css_black : css_white)
					.append("&nbsp;")
					.data('css_case',(x+y) % 2 ? css_black : css_white)
					.mouseover(over)
					.mouseleave(leave)

				);
			}
		}

	});
}) ();
