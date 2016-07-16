var showThemes = angular.module('showThemes',['ngCookies']);

var model = {};

showThemes.run(function($http) {
    $http.get("http://localhost:3000/themes").success(function(data){
       console.log(data);
        model.themes = data;
    });
});



showThemes.controller('showThemesCtrl',['$scope','$cookies','$http',function($scope,$cookies,$http) {
    $scope.showThemesController = model;

        var click=0;
        var count1=3;
        var count2=15;
        $scope.click = function(title, des, img, id) {
        click=1;        
        var wish = {};
        wish.cookie = $cookies.get('cookieEmail');
        wish.sub ='theme';
        wish.title = title;
        wish.description = des;
        wish.image = img;

        console.log(wish.cookie);
        console.log(wish.sub);
        console.log(wish.title);
        console.log(wish.description);
        console.log(wish.image);


        var temp = document.getElementsByTagName("IMG");

        console.log("$$$$$$$");
        console.log(id);

        console.log(temp);
        if(id==0){
            temp[(id)+1*count1].src='../images/fullHeart.png';
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
        if(click==1)
        {
            $http.post('http://localhost:3000/wishlist', wish).then() 
        }

       }
}]);

