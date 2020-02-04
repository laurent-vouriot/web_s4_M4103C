/**
 *
 * 04/02/2020
 * classe_damuier_moderne.py 
 * manière plus moderne pour faire une classe avec constructeur 
 *
 */

'use strict';
class Damier{

	constructor(destination,hauteur,largeur) {
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


		for(let y=0;y<largeur;y++) {
			let ligne = $('<div></div>');
			$(destination).append(ligne);
			for(let x=0; x<hauteur;x++) {
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
	}
}
(function() {
	$(document).ready(function() {
		"use strict";	
		new Damier("#damier", 10 , 10)

	});
}) ();
