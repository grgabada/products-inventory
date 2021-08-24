/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"products/inventory/productinventory/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});