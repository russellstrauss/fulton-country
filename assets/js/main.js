var Utilities = require('./utils.js');
var Polyfills = require('./polyfills.js');
var Global = require('./global.js');

(function () {
	
	document.addEventListener("DOMContentLoaded", function() {
		Polyfills().init();
		Global().init();
	});
				
})();