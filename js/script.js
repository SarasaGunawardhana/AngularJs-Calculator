var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope){
  $scope.first = 1;
  $scope.second = 1;
  $scope.updateValue = function(){
    var type = $("#method").val();
    if (type == 'add') {
      alert("add");
      $scope.calculation =$scope.first + '+' + $scope.second + "="
      + (+$scope.first + +$scope.second);
    }
    else if (type == 'sub') {
      $scope.calculation =$scope.first + '-' + $scope.second + "="
      + (($scope.first) - $scope.second);
    }
    else if (type == 'divide') {
      $scope.calculation =$scope.first + '/' + $scope.second + "="
      + (($scope.first) / $scope.second);
    }
    else {
      alert("something wrong!");
    }




  };
});
