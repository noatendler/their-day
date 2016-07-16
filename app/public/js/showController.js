var showActivity = angular.module('showActivity',['ngCookies']);

var model = {};

showActivity.run(function($http) {
    $http.get("http://localhost:3000/activities").success(function(data){
       console.log(data);
        model.activities = data;
    });
});

showActivity.controller('showCtrl',['$scope','$cookies','$http',function($scope,$cookies,$http) {
    $scope.showController = model;

        var click=0;
        $scope.click = function(title, des, price, img, id) {
        
         var temp = document.getElementsByTagName("IMG");
         console.log(temp);
         if(id==0)
         {
            temp[3].src='../images/fullHeart.png';
         }
        if(id==1)
         {
            temp[5].src='../images/fullHeart.png';
         }
        if(id==2)
         {
            temp[7].src='../images/fullHeart.png';
         }

        var wish = {};

        wish.cookie = $cookies.get('cookieEmail');
        wish.sub ='activity';
        wish.title = title;
        wish.description = des;
        wish.price = price;
        wish.image = img;

        console.log(wish.cookie);
        console.log(wish.sub);
        console.log(wish.title);
        console.log(wish.description);
        console.log(wish.price);
        console.log(wish.image);

        click=1;

        if(click==1)
        {
            $http.post('http://localhost:3000/wishlist', wish).then()

        }

       }
}]);
