(function (global) {
	'use strict';

	var button, textbox, text;
	button = global.$("#submit");
	textbox = global.$("#input");
	text = textbox.text();
	button.click(function (event) {
		console.debug(global.english_to_pie_i(text, 0, true, true, true));
	});

}(this));
