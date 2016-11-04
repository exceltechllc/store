angular.module("store", [
    "ngRoute",
    "ui.grid",
    "homeControllers",
    "contactUsControllers",
    "contactUsServices",
    "shoppingCartControllers",
    "shoppingCartServices",
    "itemsControllers",
    "itemsServices"
]).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/cart', {
            templateUrl     : '/client/views/cart.html',
            controller      : 'shoppingCartController',
            controllerAs    : 'shoppingCart'
        })
        .when('/contactus', {
            templateUrl     : '/client/views/contactUs.html',
            controller      : 'contactController',
            controllerAs    : 'contactUs'
        })
        .when('/products', {
            templateUrl     : '/client/views/items.html',
            controller      : 'itemsController',
            controllerAs    : 'items'
        })
        .when('/services', {
            templateUrl     : '/client/views/services.html'
        });
    //$locationProvider.html5Mode(true);
});