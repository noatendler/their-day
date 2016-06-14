var showFrozen = angular.module('showFrozen',[]);

showFrozen.controller('showThemesCtrl',['$scope','$http',function($scope,$http) {
     $http.get("http://localhost:3000/frozen").success(function(data){
        $scope.FrozenShowTheme = data; 
        console.log(data);
    });
}]);

