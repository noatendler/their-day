var addPartyApp = angular.module('addPartyApp',['ngCookies']);   


addPartyApp.controller('partyController',['$scope','$http','$cookies',function($scope,$http,$cookies){
    $scope.myFunc=function() { 
      var party = {};      
                party.title = $scope.title;
                party.description = $scope.description;
                party.image = $scope.myFile;
              
            }
}]);
