var showTop5 = angular.module('showTop5',[]);

var model={};


showTop5.controller('showpCtrl',['$scope','$http',function($scope,$http) {
    $scope.showtop5 = model;
         $http.get("http://localhost:3000/party").success(function(data){
        $scope.showtop5 = data; 
    });
}]);
