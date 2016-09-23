angular.module("store", [
    "ngRoute",
    "homeControllers",
    "contactUsController",
    "contactUsServices"
]).config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/cart', {
            templateUrl     : '/client/views/cart.html'
        }).when('/contactus',{
        templateUrl     : '/client/views/contactUs.html',
        controller      : 'contactController',
        controllerAs    : 'contactUs'
    });
    //$locationProvider.html5Mode(true);
});