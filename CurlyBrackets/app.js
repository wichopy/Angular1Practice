var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', function($scope){
  $scope.model = {
    firstName: "will",
    lastName: "chou"
  };

  $scope.testFunction = function() {
    window.alert("Hi from Angular");
  }
});