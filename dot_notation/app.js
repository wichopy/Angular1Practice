var myApp = angular.module('myApp',[]);

myApp.controller('OuterCtrl', function($scope){
  //$scope.val1 = "John";
  $scope.val1 = {
    name: "John"
  };
});

myApp.controller('InnerCtrl', function($scope){

});