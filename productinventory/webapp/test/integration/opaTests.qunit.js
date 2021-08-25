/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"product/inventory/productinventory/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});