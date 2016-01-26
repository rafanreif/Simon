'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function () {
   $(document).ready(function(){
			
			$("#verde").click(function(){
				$("#titulo").text("Verde");
				$("#titulo").css("color","green");
			})	
			$("#rojo").click(function(){
				$("#titulo").text("Rojo");
				$("#titulo").css("color","red");
			})
				
			$("#amarillo").click(function(){
				$("#titulo").text("Amarillo");
				$("#titulo").css("color","#E1E300");
			})
				
			$("#azul").click(function(){
				$("#titulo").text("Azul");
				$("#titulo").css("color","blue");
			})
			
		});
  });
