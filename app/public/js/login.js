var login = angular.module('login',['ngCookies']);   


login.controller('loginController',['$scope','$http','$cookies', function($scope,$http,$cookies){
        
    onSignIn = function(googleUser){     
          var profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId());
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());
          var id_token = googleUser.getAuthResponse().id_token;
          console.log("ID Token: " + id_token);
          var cook=$cookies.get('cookieEmail');
          $cookies.put('cookieEmail',profile.getEmail());
        
      var user = {};
        user.id=profile.getId();
        user.name=profile.getName();
        user.image=profile.getImageUrl();
        user.email=profile.getEmail();

        $http.post('http://localhost:3000/user', user).then() 
    }        
}]);


 
            