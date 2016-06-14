var addActivityApp = angular.module('addActivityApp',[]);   


addActivityApp.controller('activityController',['$scope','$http',function($scope,$http){
        $scope.createActivity = function(){     
                var data = {};      
                data.title = $scope.title;
                data.age = $scope.age;
                data.description = $scope.description;
                data.theme = $scope.theme;
                data.price=$scope.price;
                data.image = $scope.myFile;      
            $http.post('http://localhost:3000/upload', data).then() //callback
        }
}]);