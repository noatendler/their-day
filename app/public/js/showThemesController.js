var showThemes = angular.module('showThemes',[]);

var model = {};

showThemes.run(function($http) {
    $http.get("http://localhost:3000/themes").success(function(data){
       console.log(data);
        model.themes = data;
    });
});
showThemes.controller('showThemesCtrl',function($scope) {
    $scope.showThemesController = model;
});