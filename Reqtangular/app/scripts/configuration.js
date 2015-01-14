"use strict";

 define(["angular"], function(angular) {angular.module("AppModule.configuration", [])

.constant("APP_INFO", {
	"name": "Rangular",
	"version": "0.0.1"
})

.constant("APP", {
	"DEFAULT_LANG": "en",
	"modules": [
		{
			"name": "main"
		},
		{
			"name": "lang"
		},
		{
			"name": "home",
			"navBar": true
		}
	],
	"langs": [
		"en"
	],
	"ENV_MODE": "DEV"
})

;});