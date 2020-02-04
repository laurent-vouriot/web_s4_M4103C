(function() {
	$(document).ready(function () {

	let myColor = "black";
	for (var i = 0; i<8; i++) {
		for (var j = 0; j < 8; j++)
		{
			$('#damier')
				.append($('<div>&nbsp;</div>').css({'display': 'inline-block',
								'background-color': myColor,
								'color': 'white',
								'width': '50px',
								'height': '50px'
				}));
			myColor == "black" ? myColor = "white" : myColor = "black";
		}
		myColor == "black" ? myColor = "white" : myColor = "black";
		$('#damier').append('</br>');
	}
	});
}) ();



