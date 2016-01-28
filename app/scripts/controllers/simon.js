'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function ($scope) {
   		
  		$scope.colores = [];

  		$scope.titulo = 'Simón';

      $scope.acumuladorrojo = 0;
      $scope.acumuladorverde = 0;
      $scope.acumuladoramarillo = 0;
      $scope.acumuladorazul = 0;


  		$scope.play = function(color){
  		  $scope.colores.push(color);
        
        if(color == 'verde'){
          $scope.acumuladorverde = $scope.acumuladorverde + 1;
        }

         if(color == 'rojo'){
          $scope.acumuladorrojo = $scope.acumuladorrojo + 1;
        }
      
  		  if(color == 'azul'){
          $scope.acumuladorazul = $scope.acumuladorazul + 1;
        }

        if(color == 'amarillo'){
          $scope.acumuladoramarillo = $scope.acumuladoramarillo + 1;
        }

        /*Otra forma de hacerlo

        switch(color){
          case 'verde': 
            $scope.acumuladorverde = $scope.acumuladorverde + 1;
            break;
          case 'rojo': 
            $scope.acumuladorrojo = $scope.acumuladorrojo + 1;
            break;
          case 'azul': 
            $scope.acumuladorazul = $scope.acumuladorazul + 1;
            break;
          case 'amarillo': 
            $scope.acumuladoramarillo = $scope.acumuladoramarillo + 1;
            break;
        } */

      }

  		

      $scope.borrar = function(){
        $scope.colores = [];
        $scope.acumuladorrojo = 0;
        $scope.acumuladorverde = 0;
        $scope.acumuladorazul = 0;
        $scope.acumuladoramarillo = 0;
  		
      }

  });
