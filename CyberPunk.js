/* global Module */

/* Magic Mirror
 * Module: CyberPunk
 *
 * By 
 * MIT Licensed.
 */

Module.register("CyberPunk", {
	defaults: {
		updateInterval: 60000,
		retryDelay: 5000
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror





	getDom: function() {
		var self = this;

		// create element wrapper for show into the module
		var wrapper = document.createElement("div");
		// If this.dataRequest is not empty
		var text=document.createElement("div");

		var termynal = new Termynal('#termynal');

		wrapper.append(termynal)


		return wrapper;



	},

	getScripts: function() {
		return ['termynal.js'];
	},

	getStyles: function () {
		return [
			"CyberPunk.css",
		];
	},




});
