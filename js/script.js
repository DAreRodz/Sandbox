(function (global) {
	'use strict';

	var button, textbox, text;
	button = global.$("#submit");
	textbox = global.$("#textbox");
	button.click(function () {
		text = textbox.val();
		global.console.debug("text is: " + text);
		global.console.debug(global.english_to_pie_i(text, 0, true, true, true));
	});

}(this));
