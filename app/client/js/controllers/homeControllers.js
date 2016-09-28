angular.module("homeControllers",[])
.controller("homeController", ['$rootScope',function ($rootScope){
    var home = this;
    $rootScope.itemsInCart = 0;
}]);