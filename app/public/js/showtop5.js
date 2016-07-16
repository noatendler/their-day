var showTop5 = angular.module('showTop5',['ngCookies']);

var model={};


showTop5.controller('showpCtrl',['$scope','$http','$cookies','$document',function($scope,$http,$cookies, $document) {
    $scope.showtop5 = model;

    var click=0;
        $http.get("http://localhost:3000/party").success(function(data){
        $scope.showtop5 = data; 

        $scope.imgPath = "../images/emptyHeart.png";

        $scope.click = function(title, des, img, id) {
        click=1;        
        var wish = {};

        var temp = document.getElementsByTagName("IMG");
        count=3;
        temp[(id+1)*count].src='../images/fullHeart.png';

        wish.cookie = $cookies.get('cookieEmail');
        wish.sub = 'party';
        wish.title = title;
        wish.description=des;
        wish.image = img;

        console.log(wish.cookie);
        console.log(wish.title);
        console.log(wish.description);
        console.log(wish.image);

        if(click==1)
            {
               $http.post('http://localhost:3000/wishlist', wish).then()

            }

          }

    });
}]);

