var showThemes = angular.module('showThemes',['ngCookies','ngRoute']);
var model = {};
showThemes.run(function($http) {
    $http.get("http://localhost:3000/themes").success(function(data){
        console.log(data);
        model.themes = data;
    });
});
showThemes.config(function($routeProvider){
        console.log("hello");
        $routeProvider.when('/',{
            templateUrl:'showThemesView.html',
            controller:'showThemesCtrl',
        })
        .when('/frozen', {
            templateUrl: 'frozenView.html',
            controller: 'showFrozenCtrl',
        })
        .otherwise({
            
        });
})
showThemes.controller('showFrozenCtrl',['$scope','$http',function($scope,$http) {
    console.log("showFrozenCtrl loaded");
     $http.get("http://localhost:3000/frozen").success(function(data){
        $scope.FrozenShowTheme = data; 
        console.log(data);
    });
}]);
showThemes.controller('showThemesCtrl',['$scope','$cookies','$http',function($scope,$cookies,$http) {
    $scope.showThemesController = model;
        console.log("showThemesCtrl loaded");
        var click=0;
        $scope.click = function(title, des, img, id) {
        
        var wish = {};
        wish.cookie = $cookies.get('cookieEmail');
        wish.sub ='theme';
        wish.title = title;
        wish.description = des;
        wish.image = img;

        var temp = document.getElementsByTagName("IMG");
        if(id==0){
            temp[3].src='../images/fullHeart.png';
        }
        if(id==1){
            temp[15].src='../images/fullHeart.png';
        }
        if(id==2){
            temp[17].src='../images/fullHeart.png';
        }
        if(id==3){
            temp[19].src='../images/fullHeart.png';
        }
         if(id==4){
            temp[21].src='../images/fullHeart.png';
        }

        console.log(wish.cookie);
        console.log(wish.sub);
        console.log(wish.title);
        console.log(wish.description);
        console.log(wish.image);
        click=1;
        if(click==1)
        {
            $http.post('http://localhost:3000/wishlist', wish).then() 
        }
       }
}]);