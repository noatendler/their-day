var wish = angular.module('WishList',['ngCookies']);

wish.controller('wishCtrl',['$scope','$http','$cookies','$window',function($scope,$http,$cookies,$window) {


    var user={};
    user.email = $cookies.get('cookieEmail');
     $http.get("http://localhost:3000/wishlist/"+user.email).success(function(data){
        $scope.wishController = data; 
        console.log(data);
    });



        var delclick=0;
        var newView =0;

        $scope.delClick = function(title, des, subj) {

        var wish = {};

        wish.user = $cookies.get('cookieEmail');
        wish.sub = subj;
        wish.title = title;
        wish.description=des;

        console.log(wish.user);
        console.log(wish.title);
        console.log(wish.sub);
        console.log(wish.description);

        delclick=1;

        if(delclick==1)
            {
               $http.post('http://localhost:3000/wishlistDel', wish).then()

            }

          }

}]);