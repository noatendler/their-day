var addPartyApp = angular.module('addPartyApp',[]);   


addPartyApp.controller('partyController',['$scope','$http',function($scope,$http){
        $scope.createParty = function(){     
                var data = {};      
                data.title = $scope.title;
                data.description = $scope.description;
                data.image = $scope.myFile;      
                console.log($scope.myFile)
                console.log(data); 
            $http.post('http://localhost:3000/party', data).then() //callback
        }
}]);