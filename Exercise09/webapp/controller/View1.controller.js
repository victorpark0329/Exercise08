sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("sap.sapx05.controller.View1", {
		onBtnClick: function() {
			sap.m.MessageBox.show("The Submit Button was pushed", {
				icon: sap.m.MessageBox.Icon.SUCCESS,
				title: "Button Pressed",
				actions: sap.m.MessageBox.Action.CLOSE
			});
		}
	});
});