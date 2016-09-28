angular.module("shoppingCartControllers",[])
    .controller("shoppingCartController",['$scope', '$rootScope', '$log', 'cartService', function($scope, $rootScope, $log, cartService){
        var shoppingCart = this;
        cartService.numberOfItems().then(function (data) {
            $rootScope.itemsInCart = data;
        })

    }]);


