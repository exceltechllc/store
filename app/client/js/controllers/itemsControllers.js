angular.module("itemsControllers",[])
    .controller("itemsController",['$scope', '$rootScope', '$log', 'itemsService', function($scope, $rootScope, $log, itemsService){
        var items = this;

        itemsService.getData().then(function (data) {
            items.data = data;
            console.log(items.data);
        });

    }]);
