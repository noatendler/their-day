var showActivity = angular.module('showActivity',[]);

var model = {};

showActivity.run(function($http) {
    $http.get("http://localhost:3000/activities").success(function(data){
       console.log(data);
        model.activities = data;
    });
});
showActivity.controller('showCtrl',function($scope) {
    $scope.showController = model;
});