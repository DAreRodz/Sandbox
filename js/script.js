(function (global) {

	'use strict';

	var index = -1,
		$ = global.$,
		text,
		holdDown = false,
		timeout;

	text = $('#text').text();

	function update() {
		$('#text').html(
			text.slice(0, index)
				+ '<span class="character">'
				+ text.charAt(index)
				+ '</span>' + text.slice(index + 1, text.length)
		);
	}

	function cont(func) {

		if (holdDown) {
			timeout = setTimeout(func, 25);
		} else {
			timeout = setTimeout(func, 1000);
			holdDown = true;
		}
	}

	function prev() {

		var i = index,
			letterFinded = false;

		if (index > 0) {
			while (!letterFinded && i > 0) {
				i = i - 1;
				if (text.charAt(i).match(/[a-z]/i)) {
					letterFinded = true;
					index = i;
				}
			}
		}

		update();
		cont(prev);
	}

	function next(firstMove) {

		var i = index,
			letterFinded = false;

		if (index < text.length - 1) {
			while (!letterFinded && i < text.length - 1) {
				i = i + 1;
				if (text.charAt(i).match(/[a-z]/i)) {
					letterFinded = true;
					index = i;
				}
			}
		}

		update();
		if (firstMove !== true) {cont(next); }
	}

	function mouseUp() {
		holdDown = false;
		clearTimeout(timeout);
	}

	// Selectors:
	$('#prev').mousedown(prev);
	$('#next').mousedown(next);
	$('#prev').mouseup(mouseUp);
	$('#next').mouseup(mouseUp);
	$('#prev').mouseout(mouseUp);
	$('#next').mouseout(mouseUp);

	// init
	next(true);


}(this));


// global.console.debug(global.english_to_pie_i(text, 0, true, true, true));
