//define a controller on myApp
myApp.controller('appController',function($scope) {
	$scope.firstName = '';
	$scope.lastName = '';
	$scope.setName = function ($fName,$lName){
		$scope.firstName = $fName;
		$scope.lastName = $lName;
	}
});
